import { Module } from '@nestjs/common';
import { ApiProductsController } from './api-products.controller';
import { ApiProductsService } from './api-products.service';
import { ProductOrdersModule } from './product-orders/product-orders.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { ProductOrder } from './product-orders/entities/product-order.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: 5432,
      namingStrategy: new SnakeNamingStrategy(),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [ProductOrder],
      synchronize: true,
    }),
    ProductOrdersModule,
  ],
  controllers: [ApiProductsController],
  providers: [ApiProductsService],
})
export class ApiProductsModule {}
