import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProgresoRegistroDTO } from '../dto/progreso-registro.dto';

@Injectable()
export class ProgresoService {
    constructor(private prisma: PrismaService) { }

    async registrarProgreso(asignacionRutinaId: string, data: ProgresoRegistroDTO) {
        return this.prisma.registroProgreso.create({
            data: {
                ejercicioId: data.ejercicioId,
                asignacionId: asignacionRutinaId,
                fechaRegistro: new Date(data.fechaRegistro),
                setsRealizados: data.setsRealizados,
                repeticionesMax: data.repeticionesMax,
                cargaLevantada: data.cargaLevantada,
                notasEntrenador: data.notasEntrenador,
            },
        });
    }
    async obtenerHistorialProgreso(asignacionRutinaId: string, ejercicioId: string) {
        return this.prisma.registroProgreso.findMany({
            where: {
                asignacionId: asignacionRutinaId,
                ejercicioId,
            },
            orderBy: {
                createdAt: 'desc',
            },
            include: {
                ejercicio: true,
            },
        });
    }

    async obtenerProgresoCliente(asignacionRutinaId: string) {
        return this.prisma.registroProgreso.findMany({
            where: {
                asignacionId: asignacionRutinaId,
            },
            include: {
                ejercicio: true,
                asignacion: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
}
