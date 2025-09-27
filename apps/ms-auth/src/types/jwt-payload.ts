import { Role } from '../../../prisma/generated/ms-auth';
export type JwtPayload = { sub: string; email: string; role: Role };
