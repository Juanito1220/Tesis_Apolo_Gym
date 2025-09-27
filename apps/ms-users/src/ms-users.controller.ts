// apps/ms-users/src/ms-users.controller.ts
import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
  ForbiddenException,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { MsUsersService } from './ms-users.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AdminPatchDto, UpsertMeDto } from './dto/profile.dto';

@ApiTags('MsUsers')
@ApiBearerAuth() // <- habilita candado y “Authorize” (Bearer)
@UseGuards(JwtAuthGuard)
@Controller('ms-users')
export class MsUsersController {
  constructor(private users: MsUsersService) {}

  @Post()
  @ApiOperation({ summary: 'Crear/actualizar mi perfil (upsert)' })
  @ApiBody({
    description: 'Datos del perfil del usuario autenticado',
    type: UpsertMeDto,
    examples: {
      Basico: {
        summary: 'Básico',
        value: {
          firstName: 'Ana',
          lastName: 'López',
          gender: 'F',
          birthDate: '1996-08-12',
          phone: '+57 3001234567',
        },
      },
    },
  })
  @ApiResponse({ status: 200, description: 'Perfil creado/actualizado' })
  upsertMe(@Req() req: any, @Body() dto: UpsertMeDto) {
    return this.users.upsertMe(req.user.sub, dto);
  }

  @Get('me')
  @ApiOperation({ summary: 'Obtener mi perfil' })
  @ApiResponse({ status: 200, description: 'Perfil del usuario autenticado' })
  me(@Req() req: any) {
    return this.users.me(req.user.sub);
  }

  @Get(':userId')
  @ApiOperation({ summary: 'Obtener un perfil por ID (según permisos)' })
  @ApiParam({ name: 'userId', example: 'a037e8e-518e-42b6-ba12-7e62bdcc66de' })
  @ApiResponse({ status: 200, description: 'Perfil encontrado' })
  getOne(@Req() req: any, @Param('userId') userId: string) {
    return this.users.findOne(req.user, userId);
  }

  @Patch(':userId')
  @ApiOperation({ summary: 'Actualizar perfil como ADMIN' })
  @ApiParam({ name: 'userId', example: 'a037e8e-518e-42b6-ba12-7e62bdcc66de' })
  @ApiBody({
    description: 'Campos administrativos',
    type: AdminPatchDto,
    examples: {
      CambiarRol: {
        summary: 'Cambiar rol a TRAINER',
        value: { role: 'TRAINER', isActive: true },
      },
    },
  })
  @ApiResponse({ status: 200, description: 'Perfil actualizado' })
  patchAsAdmin(
    @Req() req: any,
    @Param('userId') userId: string,
    @Body() dto: AdminPatchDto,
  ) {
    if (req.user.role !== 'ADMIN') throw new ForbiddenException();
    return this.users.patchAsAdmin(userId, dto);
  }

  @Get()
  @ApiOperation({ summary: 'Buscar perfiles' })
  @ApiQuery({ name: 'search', required: false, example: 'ana' })
  @ApiQuery({ name: 'page', required: false, example: 1 })
  @ApiQuery({ name: 'limit', required: false, example: 10 })
  @ApiResponse({ status: 200, description: 'Resultados de búsqueda paginados' })
  search(
    @Req() req: any,
    @Query('search') search?: string,
    @Query('page') page = '1',
    @Query('limit') limit = '10',
  ) {
    return this.users.search(
      req.user,
      search ?? '',
      Number(page),
      Number(limit),
    );
  }
}
