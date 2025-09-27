import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet());
  app.enableCors({ origin: true, credentials: true });
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );

  // --- Swagger ---
  const config = new DocumentBuilder()
    .setTitle('Users Service')
    .setDescription('Endpoints de ms-users')
    .setVersion('1.0')
    .addBearerAuth() // para el botón Authorize con JWT
    .build();

  const doc = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, doc);
  // ---------------

  await app.listen(process.env.PORT || 3002);
}
void bootstrap();
