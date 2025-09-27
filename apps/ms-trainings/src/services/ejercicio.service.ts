import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EjercicioCreacionDTO, EjercicioActualizacionDTO } from '../dto/ejercicio.dto';

@Injectable()
export class EjercicioService {
    constructor(private prisma: PrismaService) { }

    async getAll() {
        return this.prisma.ejercicio.findMany();
    }

    async getById(id: string) {
        const ejercicio = await this.prisma.ejercicio.findUnique({
            where: { id },
        });

        if (!ejercicio) {
            throw new NotFoundException('Ejercicio no encontrado');
        }

        return ejercicio;
    }

    async create(data: EjercicioCreacionDTO) {
        return this.prisma.ejercicio.create({
            data,
        });
    }

    async update(id: string, data: EjercicioActualizacionDTO) {
        try {
            return await this.prisma.ejercicio.update({
                where: { id },
                data,
            });
        } catch (error) {
            throw new NotFoundException('Ejercicio no encontrado');
        }
    }

    async delete(id: string) {
        try {
            await this.prisma.ejercicio.delete({
                where: { id },
            });
        } catch (error) {
            throw new NotFoundException('Ejercicio no encontrado');
        }
    }
}
