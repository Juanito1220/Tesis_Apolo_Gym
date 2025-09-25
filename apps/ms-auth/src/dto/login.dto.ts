// apps/ms-auth/src/dto/login.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'admin@apolo.local' })
  @IsEmail()
  email!: string;

  @ApiProperty({ example: 'Secr3t!!' })
  @MinLength(6)
  password!: string;
}
