import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as express from 'express';
import { join } from 'path';
async function bootstrap() {
  const port = process.env.PORT || 5000;

  const app = await NestFactory.create(AppModule, { cors: false });
  app.setGlobalPrefix('api');
  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));
  app.enableCors({ credentials: true, origin: true });
  const config = new DocumentBuilder()
    .setTitle('Облачное хранилище')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  await app.listen(port, () => console.log(`app running ${port}`));
}
bootstrap();
