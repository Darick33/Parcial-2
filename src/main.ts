import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AllExceptionFilter } from './common/filters/http-exception.filters';
import { TiemOutInterceptor } from './common/interceptors/timeout.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionFilter);
  app.useGlobalInterceptors(new TiemOutInterceptor);

  const opciones = new DocumentBuilder()
    .setTitle('Tarea API')
    .setDescription('Documentacion de vuelos API')
    .setVersion('2.0')
    .build();
  const document = SwaggerModule.createDocument(app, opciones);
  SwaggerModule.setup('api/docs', app, document, {
    swaggerOptions: {
      filter: true,
    },
  });

  await app.listen(process.env.API_PORT || 3000);

}
bootstrap();
