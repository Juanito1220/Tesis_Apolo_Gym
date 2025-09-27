export interface JWTUser {
  sub: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
}
