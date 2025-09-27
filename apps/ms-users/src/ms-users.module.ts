import { Module } from '@nestjs/common';
import { MsUsersController } from './ms-users.controller';
import { MsUsersService } from './ms-users.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MsUsersController],
  providers: [MsUsersService],
})
export class MsUsersModule {}
