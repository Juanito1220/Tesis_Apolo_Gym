import { Injectable, Logger } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from '../types/jwt-payload';

@Injectable()
export class JwtAccessStrategy extends PassportStrategy(Strategy, 'jwt') {
  private readonly logger = new Logger(JwtAccessStrategy.name);

  constructor() {
    const secret = process.env.JWT_ACCESS_SECRET || 'supersecret_access_key';

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secret,
    });
  }

  async validate(payload: JwtPayload) {
    this.logger.log(`🔍 JWT Payload received: ${JSON.stringify(payload)}`);

    const user = {
      sub: payload.sub,
      email: payload.email,
      rol: payload.rol || payload.role, // Soportar ambos formatos
      role: payload.role || payload.rol, // Soportar ambos formatos
    };

    this.logger.log(`👤 User validated: ${JSON.stringify(user)}`);
    return user;
  }
}
