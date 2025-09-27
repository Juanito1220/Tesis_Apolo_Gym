import { IsString, IsOptional, IsUUID, IsNotEmpty } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class RutinaEjercicioDTO {
    @ApiProperty()
    @IsUUID()
    @IsNotEmpty()
    ejercicioId: string;

    @ApiProperty()
    @IsNotEmpty()
    series: number;

    @ApiProperty()
    @IsNotEmpty()
    repeticiones: string;

    @ApiProperty()
    @IsNotEmpty()
    cargaSugerida: string;
}

export class RutinaCreacionDTO {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @ApiProperty({ type: [RutinaEjercicioDTO] })
    @IsNotEmpty()
    ejercicios: RutinaEjercicioDTO[];
}