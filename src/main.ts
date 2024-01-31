import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const port = process.env.PORT || 5000;

  const app = await NestFactory.create(AppModule, { cors: false });
  app.setGlobalPrefix('api');
  // app.enableCors({ credentials: true, origin: true });
  // const config = new DocumentBuilder()
  //   .setTitle('Cloud')

  //   .build();
  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('swagger', app, document);

  await app.listen(port, () => console.log(`app running ${port}`));
}
bootstrap();
