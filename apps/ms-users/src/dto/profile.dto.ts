import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDateString,
  IsEnum,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsBoolean,
} from 'class-validator';

export enum Gender {
  M = 'M',
  F = 'F',
  OTHER = 'OTHER',
}

export class UpsertMeDto {
  @ApiProperty({ example: 'Ana' })
  @IsString()
  firstName!: string;

  @ApiProperty({ example: 'López' })
  @IsString()
  lastName!: string;

  @ApiPropertyOptional({ enum: Gender, example: 'F' })
  @IsOptional()
  @IsEnum(Gender)
  gender?: Gender;

  @ApiPropertyOptional({ example: '1996-08-12' })
  @IsOptional()
  @IsDateString()
  birthDate?: string;

  @ApiPropertyOptional({ example: '+57 3001234567' })
  @IsOptional()
  @IsPhoneNumber()
  phone?: string;
}

export class AdminPatchDto {
  @ApiPropertyOptional({
    description: 'Activar/desactivar usuario',
    example: true,
  })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional({
    description: 'Rol del usuario',
    enum: ['ADMIN', 'TRAINER', 'CLIENT'],
    example: 'TRAINER',
  })
  @IsOptional()
  @IsString()
  role?: 'ADMIN' | 'TRAINER' | 'CLIENT';
}
