import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Query,
  ParseBoolPipe,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiTags,
  ApiOperation,
  ApiQuery,
} from '@nestjs/swagger';
import { PlanService } from '../services/plan.service';
import { PlanCreationDTO } from '../dto/plan-creation.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { Roles } from '../decorators/roles.decorator';
import { RolesGuard } from '../guards/roles.guard';

@ApiTags('Planes')
@Controller('plans')
export class PlanController {
  constructor(private readonly planService: PlanService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Crear un nuevo plan' })
  async createPlan(@Body() data: PlanCreationDTO) {
    return this.planService.createPlan(data);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los planes' })
  @ApiQuery({
    name: 'includeInactive',
    required: false,
    type: Boolean,
    description: 'Incluir planes inactivos',
  })
  async getAllPlans(
    @Query('includeInactive', new ParseBoolPipe({ optional: true }))
    includeInactive = false,
  ) {
    return this.planService.getAllPlans(includeInactive);
  }
}
