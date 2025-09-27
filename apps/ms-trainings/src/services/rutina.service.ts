import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RutinaCreacionDTO } from '../dto/rutina-creacion.dto';

@Injectable()
export class RutinaService {
  constructor(private prisma: PrismaService) {}

  async getExercises() {
    return this.prisma.ejercicio.findMany();
  }

  async createRoutine(creadorId: string, data: RutinaCreacionDTO) {
    // Verificar que todos los ejercicios existen
    for (const ejercicio of data.ejercicios) {
      const exists = await this.prisma.ejercicio.findUnique({
        where: { id: ejercicio.ejercicioId },
      });
      if (!exists) {
        throw new NotFoundException(
          `Ejercicio ${ejercicio.ejercicioId} no encontrado`,
        );
      }
    }

    // Crear la rutina y sus ejercicios en una transacción
    return this.prisma.$transaction(async (tx) => {
      const rutina = await tx.rutina.create({
        data: {
          nombre: data.nombre,
          creadorId,
        },
      });

      await tx.rutinaEjercicio.createMany({
        data: data.ejercicios.map((ejercicio) => ({
          rutinaId: rutina.id,
          ejercicioId: ejercicio.ejercicioId,
          series: ejercicio.series,
          repeticiones: ejercicio.repeticiones,
          cargaSugerida: ejercicio.cargaSugerida,
        })),
      });

      return rutina;
    });
  }

  async assignRoutine(
    entrenadorId: string,
    clienteId: string,
    rutinaId: string,
  ) {
    // Verificar que la rutina existe
    const rutina = await this.prisma.rutina.findUnique({
      where: { id: rutinaId },
    });

    if (!rutina) {
      throw new NotFoundException('Rutina no encontrada');
    }

    // Desactivar cualquier rutina activa previa del cliente
    await this.prisma.asignacionRutina.updateMany({
      where: {
        clienteId,
        activa: true,
      },
      data: {
        activa: false,
      },
    });

    // Crear la nueva asignación
    return this.prisma.asignacionRutina.create({
      data: {
        clienteId,
        entrenadorId,
        rutinaId,
        fechaInicio: new Date(),
        fechaFin: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 días por defecto
        activa: true,
      },
    });
  }

  async getActiveRoutine(clienteId: string) {
    const asignacion = await this.prisma.asignacionRutina.findFirst({
      where: {
        clienteId,
        activa: true,
      },
      include: {
        rutina: {
          include: {
            ejercicios: {
              include: {
                ejercicio: true,
              },
            },
          },
        },
      },
    });

    if (!asignacion) {
      throw new NotFoundException('No hay rutina activa');
    }

    return asignacion;
  }
}
