import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { PrismaModule } from './prisma/prisma.module';
import { RutinaService } from './services/rutina.service';
import { ProgresoService } from './services/progreso.service';
import { EjercicioService } from './services/ejercicio.service';
import { EjercicioController } from './controllers/ejercicio.controller';
import { RutinaController } from './controllers/rutina.controller';
import { ProgresoController } from './controllers/progreso.controller';
import { JwtAccessStrategy } from './strategies/jwt-access.strategy';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['./apps/ms-trainings/.env', '.env'],
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    PrismaModule,
  ],
  controllers: [EjercicioController, RutinaController, ProgresoController],
  providers: [
    RutinaService,
    ProgresoService,
    EjercicioService,
    JwtAccessStrategy,
  ],
  exports: [RutinaService, ProgresoService, EjercicioService],
})
export class MsTrainingsModule {}
