import { IsString, IsNumber, IsUUID, IsNotEmpty, IsOptional, IsDateString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ProgresoRegistroDTO {
    @ApiProperty()
    @IsUUID()
    @IsNotEmpty()
    asignacionId: string;

    @ApiProperty()
    @IsUUID()
    @IsNotEmpty()
    ejercicioId: string;

    @ApiProperty()
    @IsDateString()
    @IsNotEmpty()
    fechaRegistro: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    setsRealizados: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    repeticionesMax: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    cargaLevantada: number;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    notasEntrenador?: string;
}