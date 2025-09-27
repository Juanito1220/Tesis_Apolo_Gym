import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

import { MsAuthController } from './ms-auth.controller';
import { MsAuthService } from './ms-auth.service';

import { PrismaModule } from './prisma/prisma.module';
import { JwtAccessStrategy } from './strategies/jwt-access.strategy';
import { JwtRefreshStrategy } from './strategies/jwt-refresh.strategy';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['apps/ms-auth/.env'],
    }),
    PrismaModule,
    JwtModule.register({}),
  ],
  controllers: [MsAuthController],
  providers: [MsAuthService, JwtAccessStrategy, JwtRefreshStrategy],
})
export class MsAuthModule {}
