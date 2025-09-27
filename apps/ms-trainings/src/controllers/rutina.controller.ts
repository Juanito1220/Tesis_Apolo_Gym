import { Controller, Get, Post, Body, UseGuards, Req } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { RutinaService } from '../services/rutina.service';
import { RutinaCreacionDTO } from '../dto/rutina-creacion.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { RolesGuard } from '../guards/roles.guard';
import { Roles } from '../decorators/roles.decorator';

@ApiTags('rutinas')
@ApiBearerAuth('JWT-auth')
@Controller('rutinas')
@UseGuards(JwtAuthGuard, RolesGuard)
export class RutinaController {
  constructor(private readonly rutinaService: RutinaService) {}

  @Get('ejercicios')
  @ApiOperation({ summary: 'Obtener todos los ejercicios disponibles' })
  @ApiResponse({
    status: 200,
    description: 'Lista de ejercicios obtenida con éxito',
  })
  getExercises() {
    return this.rutinaService.getExercises();
  }

  @Post()
  @Roles('ADMIN', 'TRAINER')
  @ApiOperation({ summary: 'Crear una nueva rutina' })
  @ApiResponse({ status: 201, description: 'Rutina creada con éxito' })
  createRoutine(@Req() req: any, @Body() createRutinaDto: RutinaCreacionDTO) {
    const creadorId = req.user.sub;
    return this.rutinaService.createRoutine(creadorId, createRutinaDto);
  }

  @Post('asignar/:clienteId/:rutinaId')
  @Roles('ADMIN', 'TRAINER')
  @ApiOperation({ summary: 'Asignar una rutina a un cliente' })
  @ApiResponse({ status: 200, description: 'Rutina asignada con éxito' })
  @ApiResponse({ status: 404, description: 'Rutina o cliente no encontrado' })
  assignRoutine(
    @Req() req: any,
    @Body('clienteId') clienteId: string,
    @Body('rutinaId') rutinaId: string,
  ) {
    const entrenadorId = req.user.sub;
    return this.rutinaService.assignRoutine(entrenadorId, clienteId, rutinaId);
  }

  @Get('activa')
  @ApiOperation({ summary: 'Obtener la rutina activa del cliente actual' })
  @ApiResponse({ status: 200, description: 'Rutina activa obtenida con éxito' })
  @ApiResponse({ status: 404, description: 'No hay rutina activa' })
  getActiveRoutine(@Req() req: any) {
    const clienteId = req.user.sub;
    return this.rutinaService.getActiveRoutine(clienteId);
  }
}
