import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { AdminPatchDto, UpsertMeDto } from './dto/profile.dto';

@Injectable()
export class MsUsersService {
  constructor(private prisma: PrismaService) {}

  async upsertMe(userId: string, dto: UpsertMeDto) {
    console.log("Hola2");
    const data: any = { ...dto };
    if ('birthDate' in dto && dto.birthDate) {
      data.birthDate = new Date(dto.birthDate as string);
    }
    return this.prisma.userProfile.upsert({
      where: { userId },
      update: data,
      create: { userId, ...data },
    });
  }

  async me(userId: string) {
    const p = await this.prisma.userProfile.findUnique({ where: { userId } });
    if (!p) throw new NotFoundException('Perfil no encontrado');
    return p;
  }

  async findOne(requestor: any, targetId: string) {
    if (requestor.sub !== targetId && requestor.role !== 'ADMIN') {
      throw new ForbiddenException();
    }
    return this.me(targetId);
  }

  async patchAsAdmin(targetId: string, dto: AdminPatchDto) {
    const data: any = { ...dto };
    if ('birthDate' in dto && dto.birthDate) {
      data.birthDate = new Date(dto.birthDate as string);
    }
    const p = await this.prisma.userProfile
      .update({ where: { userId: targetId }, data })
      .catch(() => null);
    if (!p) throw new NotFoundException('Perfil no encontrado');
    return p;
  }

  async search(requestor: any, q = '', page = 1, limit = 10) {
    if (requestor.role !== 'ADMIN') throw new ForbiddenException();
    const skip = (page - 1) * limit;
    return this.prisma.userProfile.findMany({
      where: q
        ? {
            OR: [
              { firstName: { contains: q, mode: 'insensitive' } },
              { lastName: { contains: q, mode: 'insensitive' } },
              { email: { contains: q, mode: 'insensitive' } },
              { phone: { contains: q, mode: 'insensitive' } },
            ],
          }
        : undefined,
      skip,
      take: limit,
      orderBy: { updatedAt: 'desc' },
    });
  }
}
