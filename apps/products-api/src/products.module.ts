import { Module } from '@nestjs/common';
import { ApiProductsController } from './products.controller';
import { ApiProductsService } from './products.service';
import { ProductOrdersModule } from './orders/orders.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { ProductOrder } from './orders/entities/product-order.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '../../.env',
    }),
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
