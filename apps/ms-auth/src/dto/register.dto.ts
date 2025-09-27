// apps/ms-auth/src/dto/register.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsOptional, MinLength } from 'class-validator';
import { Role } from '../../../prisma/generated/ms-auth';

export class RegisterDto {
  @ApiProperty({ example: 'admin@apolo.local' })
  @IsEmail()
  email!: string;

  @ApiProperty({ example: 'Secr3t!!' })
  @MinLength(6)
  password!: string;

  @ApiProperty({ enum: Role, example: 'ADMIN', required: false })
  @IsOptional()
  @IsEnum(Role)
  role?: Role;
}
