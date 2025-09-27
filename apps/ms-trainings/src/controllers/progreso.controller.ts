import { Controller, Get, Post, Body, UseGuards, Param } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { ProgresoService } from '../services/progreso.service';
import { ProgresoRegistroDTO } from '../dto/progreso-registro.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { RolesGuard } from '../guards/roles.guard';
import { Roles } from '../decorators/roles.decorator';

@ApiTags('progreso')
@ApiBearerAuth('JWT-auth')
@Controller('progreso')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ProgresoController {
  constructor(private readonly progresoService: ProgresoService) {}

  @Post(':asignacionId')
  @ApiOperation({ summary: 'Registrar progreso de un ejercicio' })
  @ApiResponse({ status: 201, description: 'Progreso registrado con éxito' })
  registrarProgreso(
    @Param('asignacionId') asignacionId: string,
    @Body() data: ProgresoRegistroDTO,
  ) {
    return this.progresoService.registrarProgreso(asignacionId, data);
  }

  @Get(':asignacionId/ejercicio/:ejercicioId')
  @ApiOperation({
    summary: 'Obtener historial de progreso para un ejercicio específico',
  })
  @ApiResponse({
    status: 200,
    description: 'Historial de progreso obtenido con éxito',
  })
  obtenerHistorialProgreso(
    @Param('asignacionId') asignacionId: string,
    @Param('ejercicioId') ejercicioId: string,
  ) {
    return this.progresoService.obtenerHistorialProgreso(
      asignacionId,
      ejercicioId,
    );
  }

  @Get(':asignacionId/progreso')
  @Roles('ADMIN', 'TRAINER', 'CLIENT')
  @ApiOperation({
    summary: 'Obtener todo el progreso de una asignación de rutina',
  })
  @ApiResponse({ status: 200, description: 'Progreso obtenido con éxito' })
  obtenerProgresoAsignacion(@Param('asignacionId') asignacionId: string) {
    return this.progresoService.obtenerProgresoCliente(asignacionId);
  }
}
