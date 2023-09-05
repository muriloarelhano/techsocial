import { Module } from '@nestjs/common';
import { ProductOrdersService } from './orders.service';
import { ProductOrdersController } from './orders.controller';
import { ProductOrder } from './entities/product-order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProductOrder])],
  controllers: [ProductOrdersController],
  providers: [ProductOrdersService],
  exports: [ProductOrdersService],
})
export class ProductOrdersModule {}
