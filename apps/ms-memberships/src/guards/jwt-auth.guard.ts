import {
    Injectable,
    CanActivate,
    ExecutionContext,
    UnauthorizedException,
} from '@nestjs/common';
import { verify } from 'jsonwebtoken';
import { Request } from 'express';
import { JWTUser } from '../types/jwt.types';

interface AuthenticatedRequest extends Request {
    user: JWTUser;
}

@Injectable()
export class JwtAuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
        const authHeader = request.headers.authorization;

        if (!authHeader) {
            throw new UnauthorizedException('No token provided');
        }

        const token = authHeader.split(' ')[1];
        const secret = process.env.JWT_ACCESS_SECRET;

        if (!secret) {
            throw new Error('JWT_ACCESS_SECRET must be set');
        }

        try {
            const decoded = verify(token, secret) as JWTUser;
            request.user = decoded;
            return true;
        } catch (error) {
            throw new UnauthorizedException('Invalid token');
        }
    }
}
