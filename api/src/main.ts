import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { AppConfig } from './config/app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const appConfig = app.get(AppConfig);
  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  
  app.enableCors({
    origin: appConfig.corsOrigin,
    credentials: true,
  });
  
  const port = appConfig.appPort;
  const host = appConfig.appHost;
  
  await app.listen(port, host);
  
  console.log(`Aplicación corriendo en http://${host}:${port}`);
  console.log(`Entorno: ${appConfig.nodeEnv}`);
  console.log(`Kafka brokers: ${appConfig.kafkaBrokers.join(', ')}`);
}

bootstrap();