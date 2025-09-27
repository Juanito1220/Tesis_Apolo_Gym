import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { PlanService } from './services/plan.service';
import { MembresiaService } from './services/membresia.service';
import { PlanController } from './controllers/plan.controller';
import { MembresiaController } from './controllers/membresia.controller';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: './apps/ms-memberships/.env',
        }),
        PrismaModule,
    ],
    controllers: [PlanController, MembresiaController],
    providers: [PlanService, MembresiaService],
})
export class MsMembershipsModule { }
