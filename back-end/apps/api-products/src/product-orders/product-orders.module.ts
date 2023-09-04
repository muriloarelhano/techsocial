import { Module } from '@nestjs/common';
import { ProductOrdersService } from './product-orders.service';
import { ProductOrdersController } from './product-orders.controller';
import { ProductOrder } from './entities/product-order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProductOrder])],
  controllers: [ProductOrdersController],
  providers: [ProductOrdersService],
  exports: [ProductOrdersService],
})
export class ProductOrdersModule {}
