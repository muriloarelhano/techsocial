import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ApiProductsModule } from './products.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiProductsModule);

  const config = new DocumentBuilder()
    .setTitle('Tech Social Test')
    .setDescription('')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.APP_PRODUCTS_API_PORT || 3002);
}
bootstrap();
