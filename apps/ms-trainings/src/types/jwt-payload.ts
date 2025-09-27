export interface JwtPayload {
  sub: string;
  email: string;
  rol?: string;
  role?: string;
  iat?: number;
  exp?: number;
}
