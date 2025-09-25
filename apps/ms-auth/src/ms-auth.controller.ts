import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import type { Request } from 'express';
import { MsAuthService } from './ms-auth.service';

// Swagger
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

// DTOs
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

// Guards/roles
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { JwtRefreshGuard } from './guards/jwt-refresh.guard';
import { Roles } from './roles/roles.decorator';
import { RolesGuard } from './roles/roles.guard';

@ApiTags('Auth')
@Controller('auth')
export class MsAuthController {
  constructor(private auth: MsAuthService) {}

  @ApiOperation({ summary: 'Registrar usuario' })
  @ApiBody({
    type: RegisterDto,
    examples: {
      admin: {
        summary: 'Admin',
        value: {
          email: 'admin@apolo.local',
          password: 'Secr3t!!',
          role: 'ADMIN',
        },
      },
      trainer: {
        summary: 'Entrenador',
        value: {
          email: 'trainer@apolo.local',
          password: 'Secr3t!!',
          role: 'TRAINER',
        },
      },
      client: {
        summary: 'Cliente',
        value: { email: 'cliente@apolo.local', password: 'Secr3t!!' },
      },
    },
  })
  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.auth.register(dto);
  }

  @ApiOperation({ summary: 'Login' })
  @ApiBody({
    type: LoginDto,
    examples: {
      ok: { value: { email: 'admin@apolo.local', password: 'Secr3t!!' } },
    },
  })
  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.auth.login(dto);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Perfil del usuario autenticado' })
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  profile(@Req() req: Request) {
    return req.user;
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Refrescar tokens' })
  @UseGuards(JwtRefreshGuard)
  @Post('refresh')
  refresh(@Req() req: any) {
    return this.auth.refresh(req.user);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Solo para ADMIN' })
  @Get('admin-only')
  adminOnly() {
    return { ok: true, msg: 'solo admins' };
  }
}
