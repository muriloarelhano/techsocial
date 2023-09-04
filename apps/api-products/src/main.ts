import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ApiProductsModule } from './api-products.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiProductsModule);

  const config = new DocumentBuilder()
    .setTitle('Tech Social Test')
    .setDescription('')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(3001);
}
bootstrap();
