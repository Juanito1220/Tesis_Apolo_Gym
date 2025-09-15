import { NestFactory } from '@nestjs/core';
import { MsAuthModule } from './ms-auth.module';

async function bootstrap() {
  const app = await NestFactory.create(MsAuthModule);
  await app.listen(process.env.port ?? 3001);
}
bootstrap();
