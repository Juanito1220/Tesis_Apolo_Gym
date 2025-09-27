import {
    Controller,
    Post,
    Body,
    Get,
    UseGuards,
    Param,
    Headers,
    Req,
} from '@nestjs/common';
import { Request } from 'express';
import type { RawBodyRequest } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiOperation } from '@nestjs/swagger';
import { MembresiaService } from '../services/membresia.service';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { JWTUser } from '../types/jwt.types';

@ApiTags('Membresías')
@Controller('memberships')
export class MembresiaController {
    constructor(private readonly membresiaService: MembresiaService) { }

    @Get('check-status')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Verificar estado de membresía' })
    async checkStatus(@Req() req: Request & { user: JWTUser }) {
        return this.membresiaService.checkMembershipStatus(req.user.sub);
    }

    @Post('subscribe/:planId')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Suscribirse a un plan' })
    async subscribe(@Param('planId') planId: string, @Req() req: Request & { user: JWTUser }) {
        console.log('User from request:', req.user);
        if (!req.user?.sub) {
            throw new Error('Usuario no autenticado');
        }
        return this.membresiaService.createSubscription(req.user.sub, planId);
    }

    @Post('webhook')
    @ApiOperation({ summary: 'Webhook de Stripe' })
    async handleWebhook(
        @Headers('stripe-signature') signature: string,
        @Req() req: RawBodyRequest<Request>,
    ) {
        if (!req.rawBody) {
            throw new Error('No raw body found in request');
        }
        return this.membresiaService.handleStripeWebhook(signature, req.rawBody);
    }
}
