import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import { createProxyMiddleware } from 'http-proxy-middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet());
  app.enableCors({ origin: true, credentials: true });
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );

  const AUTH_URL = process.env.AUTH_URL || 'http://localhost:3001';
  const USERS_URL = process.env.USERS_URL || 'http://localhost:3002';
  const MEMBERSHIPS_URL =
    process.env.MEMBERSHIPS_URL || 'http://localhost:3003';
  const TRAININGS_URL = process.env.TRAININGS_URL || 'http://localhost:3004';

  app.use(
    '/ms-users',
    createProxyMiddleware({
      target: USERS_URL,
      changeOrigin: true,
      xfwd: true,
      pathRewrite: (path) => '/ms-users' + path,
    }),
  );

  app.use(
    '/auth',
    createProxyMiddleware({
      target: AUTH_URL,
      changeOrigin: true,
      xfwd: true,
      pathRewrite: (path) => '/auth' + path,
    }),
  );

  // Proxy para memberships
  app.use(
    '/plans',
    createProxyMiddleware({
      target: MEMBERSHIPS_URL,
      changeOrigin: true,
      xfwd: true,
      pathRewrite: (path) => '/plans' + path,
    }),
  );

  app.use(
    '/memberships',
    createProxyMiddleware({
      target: MEMBERSHIPS_URL,
      changeOrigin: true,
      xfwd: true,
      pathRewrite: (path) => '/memberships' + path,
    }),
  );

  // Proxy para trainings
  app.use(
    '/ejercicios',
    createProxyMiddleware({
      target: TRAININGS_URL,
      changeOrigin: true,
      xfwd: true,
      pathRewrite: (path) => '/ejercicios' + path,
    }),
  );

  app.use(
    '/rutinas',
    createProxyMiddleware({
      target: TRAININGS_URL,
      changeOrigin: true,
      xfwd: true,
      pathRewrite: (path) => '/rutinas' + path,
    }),
  );

  app.use(
    '/progreso',
    createProxyMiddleware({
      target: TRAININGS_URL,
      changeOrigin: true,
      xfwd: true,
      pathRewrite: (path) => '/progreso' + path,
    }),
  );

  await app.listen(process.env.PORT || 3000);
}
void bootstrap();
