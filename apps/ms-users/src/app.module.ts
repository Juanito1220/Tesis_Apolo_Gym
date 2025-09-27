import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MsUsersModule } from './ms-users.module';
import { JwtStrategy } from './auth/jwt.strategy';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['apps/ms-users/.env'],
    }),
    JwtModule.register({ secret: process.env.ACCESS_JWT_SECRET }),
    MsUsersModule,
  ],
  providers: [JwtStrategy],
})
export class AppModule {}
