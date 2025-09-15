import { Module } from '@nestjs/common';
import { MsAuthController } from './ms-auth.controller';
import { MsAuthService } from './ms-auth.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['apps/ms-auth/.env'],
    }),
  ],
  controllers: [MsAuthController],
  providers: [MsAuthService],
})
export class MsAuthModule {}
