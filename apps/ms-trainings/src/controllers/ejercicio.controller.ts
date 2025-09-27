import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { EjercicioService } from '../services/ejercicio.service';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { RolesGuard } from '../guards/roles.guard';
import { Roles } from '../decorators/roles.decorator';
import {
  EjercicioCreacionDTO,
  EjercicioActualizacionDTO,
} from '../dto/ejercicio.dto';

@ApiTags('ejercicios')
@ApiBearerAuth('JWT-auth')
@Controller('ejercicios')
@UseGuards(JwtAuthGuard, RolesGuard)
export class EjercicioController {
  constructor(private readonly ejercicioService: EjercicioService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los ejercicios' })
  @ApiResponse({
    status: 200,
    description: 'Lista de ejercicios obtenida con éxito',
  })
  getAllEjercicios() {
    return this.ejercicioService.getAll();
  }

  @Get('public')
  @ApiOperation({
    summary: 'Obtener todos los ejercicios (público para testing)',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de ejercicios obtenida con éxito',
  })
  getAllEjerciciosPublic() {
    return this.ejercicioService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un ejercicio por ID' })
  @ApiResponse({ status: 200, description: 'Ejercicio encontrado' })
  @ApiResponse({ status: 404, description: 'Ejercicio no encontrado' })
  getEjercicioById(@Param('id') id: string) {
    return this.ejercicioService.getById(id);
  }

  @Post()
  //@Roles('ADMIN', 'TRAINER')
  @ApiOperation({ summary: 'Crear un nuevo ejercicio' })
  @ApiResponse({ status: 201, description: 'Ejercicio creado con éxito' })
  createEjercicio(@Body() createEjercicioDto: EjercicioCreacionDTO) {
    return this.ejercicioService.create(createEjercicioDto);
  }

  @Put(':id')
  @Roles('ADMIN', 'TRAINER')
  @ApiOperation({ summary: 'Actualizar un ejercicio existente' })
  @ApiResponse({ status: 200, description: 'Ejercicio actualizado con éxito' })
  @ApiResponse({ status: 404, description: 'Ejercicio no encontrado' })
  updateEjercicio(
    @Param('id') id: string,
    @Body() updateEjercicioDto: EjercicioActualizacionDTO,
  ) {
    return this.ejercicioService.update(id, updateEjercicioDto);
  }

  @Delete(':id')
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Eliminar un ejercicio' })
  @ApiResponse({ status: 200, description: 'Ejercicio eliminado con éxito' })
  @ApiResponse({ status: 404, description: 'Ejercicio no encontrado' })
  deleteEjercicio(@Param('id') id: string) {
    return this.ejercicioService.delete(id);
  }
}
