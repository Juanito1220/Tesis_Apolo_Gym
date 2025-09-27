import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class EjercicioCreacionDTO {
    @ApiProperty({ description: 'Nombre del ejercicio' })
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @ApiProperty({ description: 'Descripción detallada del ejercicio' })
    @IsString()
    @IsNotEmpty()
    descripcion: string;

    @ApiProperty({ description: 'Músculo o grupo muscular objetivo' })
    @IsString()
    @IsNotEmpty()
    musculoObjetivo: string;

    @ApiPropertyOptional({ description: 'URL del video demostrativo' })
    @IsString()
    @IsOptional()
    urlVideo?: string;
}

export class EjercicioActualizacionDTO {
    @ApiPropertyOptional({ description: 'Nombre del ejercicio' })
    @IsString()
    @IsOptional()
    nombre?: string;

    @ApiPropertyOptional({ description: 'Descripción detallada del ejercicio' })
    @IsString()
    @IsOptional()
    descripcion?: string;

    @ApiPropertyOptional({ description: 'Músculo o grupo muscular objetivo' })
    @IsString()
    @IsOptional()
    musculoObjetivo?: string;

    @ApiPropertyOptional({ description: 'URL del video demostrativo' })
    @IsString()
    @IsOptional()
    urlVideo?: string;
}