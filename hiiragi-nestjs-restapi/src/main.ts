import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from 'src/app.module';
import { Configuration } from 'src/config/configuration';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  const configService =
    app.get<ConfigService<Configuration, true>>(ConfigService);
  app.enableCors();
  await app.listen(configService.get('nest.port', { infer: true }));
}

bootstrap();
