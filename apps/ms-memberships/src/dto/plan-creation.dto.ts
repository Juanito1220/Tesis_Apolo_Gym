import { IsString, IsNumber, IsArray, IsOptional, IsBoolean, Min, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PlanCreationDTO {
    @ApiProperty({ example: 'Plan Premium' })
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @ApiProperty({ example: 'Acceso completo a todas las instalaciones' })
    @IsString()
    @IsOptional()
    descripcion?: string;

    @ApiProperty({ example: 99.99 })
    @IsNumber()
    @Min(0)
    precio: number;

    @ApiProperty({ example: 30 })
    @IsNumber()
    @Min(1)
    duracionDias: number;

    @ApiProperty({ example: ['Acceso 24/7', 'Entrenador personal'] })
    @IsArray()
    @IsString({ each: true })
    beneficios: string[];

    @ApiProperty({ example: true })
    @IsBoolean()
    @IsOptional()
    activo?: boolean;
}