import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
import { PlanCreationDTO } from '../dto/plan-creation.dto';

@Injectable()
export class PlanService {
  private stripe: Stripe;

  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
  ) {
    const stripeKey = this.config.get<string>('STRIPE_SECRET_KEY');
    if (!stripeKey) {
      throw new Error('STRIPE_SECRET_KEY must be set');
    }
    this.stripe = new Stripe(stripeKey, {
      apiVersion: '2025-08-27.basil' as const,
    });
  }

  async createPlan(data: PlanCreationDTO) {
    // Crear producto en Stripe
    const stripeProduct = await this.stripe.products.create({
      name: data.nombre,
      description: data.descripcion,
    });

    // Crear precio en Stripe
    const stripePrice = await this.stripe.prices.create({
      product: stripeProduct.id,
      unit_amount: Math.round(data.precio * 100), // Stripe usa centavos
      currency: 'usd',
    });

    // Crear plan en la base de datos
    return this.prisma.plan.create({
      data: {
        nombre: data.nombre,
        descripcion: data.descripcion,
        precio: data.precio,
        duracionDias: data.duracionDias,
        beneficios: data.beneficios,
        activo: data.activo ?? true,
      },
    });
  }

  async getAllPlans(includeInactive = false) {
    return this.prisma.plan.findMany({
      where: includeInactive ? {} : { activo: true },
    });
  }

  async getPlanById(id: string) {
    return this.prisma.plan.findUnique({
      where: { id },
    });
  }
}
