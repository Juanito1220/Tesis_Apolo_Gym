import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Role, User } from '@prisma/client';

@Injectable()
export class MsAuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const exists = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (exists) throw new ConflictException('Email already registered');

    const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS ?? '10', 10);
    const passwordHash = await bcrypt.hash(dto.password, saltRounds);
    const role: Role = dto.role ?? 'CLIENT';

    const user = await this.prisma.user.create({
      data: { email: dto.email, passwordHash, role },
    });
    const tokens = await this.issueTokens(user);
    await this.saveRefreshHash(user.id, tokens.refresh_token);
    return { user: this.sanitize(user), ...tokens };
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const ok = await bcrypt.compare(dto.password, user.passwordHash);
    if (!ok) throw new UnauthorizedException('Invalid credentials');

    const tokens = await this.issueTokens(user);
    await this.saveRefreshHash(user.id, tokens.refresh_token);
    return { user: this.sanitize(user), ...tokens };
  }

  async refresh(userFromReq: {
    sub: string;
    email: string;
    role: Role;
    refreshToken: string;
  }) {
    const user = await this.prisma.user.findUnique({
      where: { email: userFromReq.email },
    });
    if (!user || !user.refreshTokenHash) throw new UnauthorizedException();

    const valid = await bcrypt.compare(
      userFromReq.refreshToken,
      user.refreshTokenHash,
    );
    if (!valid) throw new UnauthorizedException();

    const tokens = await this.issueTokens(user);
    await this.saveRefreshHash(user.id, tokens.refresh_token);
    return tokens;
  }

  async logout(userId: string) {
    await this.prisma.user.update({
      where: { id: userId },
      data: { refreshTokenHash: null },
    });
    return { ok: true };
  }

  async validateRefreshToken(
    userId: string,
    refreshToken: string,
  ): Promise<boolean> {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user || !user.refreshTokenHash) return false;
    return await bcrypt.compare(refreshToken, user.refreshTokenHash);
  }

  private sanitize(user: User) {
    // Remove passwordHash before returning user object
    const userCopy: Omit<User, 'passwordHash'> & { passwordHash?: string } = {
      ...user,
    };
    delete userCopy.passwordHash;
    return userCopy;
  }

  private async issueTokens(user: User) {
    const payload = { sub: user.id, email: user.email, role: user.role };
    const access_token = await this.jwt.signAsync(payload, {
      secret: process.env.JWT_ACCESS_SECRET,
      expiresIn: process.env.JWT_ACCESS_TTL ?? '15m',
    });
    const refresh_token = await this.jwt.signAsync(payload, {
      secret: process.env.JWT_REFRESH_SECRET,
      expiresIn: process.env.JWT_REFRESH_TTL ?? '7d',
    });
    return { access_token, refresh_token };
  }

  private async saveRefreshHash(userId: string, refreshToken: string) {
    const hash = await bcrypt.hash(refreshToken, 10);
    await this.prisma.user.update({
      where: { id: userId },
      data: { refreshTokenHash: hash },
    });
  }
}
