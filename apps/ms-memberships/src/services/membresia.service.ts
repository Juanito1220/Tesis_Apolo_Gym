import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
type StripeInstance = InstanceType<typeof Stripe>;
import {
    EstadoMembresia,
    Membresia,
    Plan,
} from '../../../prisma/generated/ms-memberships';
import { PrismaService } from '../prisma/prisma.service';

interface AlertaMembresia {
    type: string;
    usuarioId: string;
    membresiaId: string;
    diasRestantes: number;
    fechaVencimiento: Date;
}

@Injectable()
export class MembresiaService {
    private stripe!: StripeInstance;

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

    async checkMembershipStatus(usuarioId: string) {
        const membresia = await (this.prisma.membresia.findFirst({
            where: {
                usuarioId,
                estado: EstadoMembresia.ACTIVA,
            },
            orderBy: { fechaVencimiento: 'desc' },
            include: { plan: true },
        }) as Promise<(Membresia & { plan: Plan }) | null>);

        if (!membresia) return { status: 'NO_MEMBERSHIP' };

        const hoy = new Date();
        let alerta: {
            type: string;
            usuarioId: string;
            membresiaId: string;
            diasRestantes: number;
            fechaVencimiento: Date;
        } | null = null;

        if (membresia.fechaVencimiento < hoy) {
            await this.prisma.membresia.update({
                where: { id: membresia.id },
                data: { estado: EstadoMembresia.VENCIDA },
            });
            return { status: 'VENCIDA' };
        }

        const diasRestantes = Math.ceil(
            (membresia.fechaVencimiento.getTime() - hoy.getTime()) /
            (1000 * 60 * 60 * 24),
        );

        if (diasRestantes <= 7) {
            alerta = {
                type: 'ALERTA_VENCIMIENTO',
                usuarioId,
                membresiaId: membresia.id,
                diasRestantes,
                fechaVencimiento: membresia.fechaVencimiento,
            };
            // Llamar ms-notifications para enviar alerta (pendiente implementar)
        }

        return {
            status: 'ACTIVA',
            membresia,
            alerta,
        };
    }

    async createSubscription(usuarioId: string, planId: string) {
        console.log('Creating subscription for user:', usuarioId, 'plan:', planId);
        const plan = await this.prisma.plan.findUnique({
            where: { id: planId },
        });

        if (!plan) {
            throw new Error('Plan no encontrado');
        }

        // Crear sesión de pago en Stripe
        const session = await this.stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: plan.nombre,
                            description: plan.descripcion || undefined,
                        },
                        unit_amount: Math.round(plan.precio * 100),
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.FRONTEND_URL}/cancel`,
            metadata: {
                usuarioId,
                planId,
            },
        });

        // Crear membresía en estado pendiente
        await this.prisma.membresia.create({
            data: {
                usuarioId,
                planId,
                fechaInicio: new Date(),
                fechaVencimiento: new Date(
                    Date.now() + plan.duracionDias * 24 * 60 * 60 * 1000,
                ),
                estado: EstadoMembresia.PENDIENTE_PAGO,
                stripeSessionId: session.id,
            },
        });

        return { sessionId: session.id, sessionUrl: session.url };
    }

    async handleStripeWebhook(signature: string, payload: Buffer) {
        try {
            const event = this.stripe.webhooks.constructEvent(
                payload,
                signature,
                this.config.get<string>('STRIPE_WEBHOOK_SECRET') || '',
            );

            if (event.type === 'checkout.session.completed') {
                const session = event.data.object as Stripe.Checkout.Session;
                await this.activateMembresia(session.id);
            }
        } catch (err) {
            const error = err as Error;
            throw new Error('Error procesando webhook: ' + error.message);
        }
    }

    private async activateMembresia(sessionId: string) {
        const membresia = await (this.prisma.membresia.findFirst({
            where: { stripeSessionId: sessionId },
        }) as Promise<Membresia | null>);

        if (membresia) {
            await this.prisma.membresia.update({
                where: { id: membresia.id },
                data: { estado: EstadoMembresia.ACTIVA },
            });
        }
    }
}
