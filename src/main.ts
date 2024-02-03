import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { PrismaClientExceptionFilter } from 'nestjs-prisma';
import { AppModule } from './app.module';
import type { CorsConfig, NestConfig } from './common/configs/config.interface';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  // Validation
  app.useGlobalPipes(new ValidationPipe());

  // enable shutdown hook
  app.enableShutdownHooks();

  // Prisma Client Exception Filter for unhandled exceptions
  app.useGlobalFilters(new PrismaClientExceptionFilter(app.getHttpAdapter()));

  const configService = app.get(ConfigService);
  const nestConfig = configService.get<NestConfig>('nest');
  const corsConfig = configService.get<CorsConfig>('cors');

  // Cors
  if (corsConfig.enabled) {
    app.enableCors();
  }

  await app.listen(process.env.PORT || nestConfig.port || 3000);
}
bootstrap();
