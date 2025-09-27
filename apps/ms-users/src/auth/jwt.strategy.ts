import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.getOrThrow<string>('ACCESS_JWT_SECRET'),
      ignoreExpiration: false,
    });
  }

  async validate(payload: any) {
    // payload: { sub, email, role, iat, exp }
    console.log('JWT payload', payload);
    return payload;
  }
}
