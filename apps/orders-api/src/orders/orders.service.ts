import { Injectable } from '@nestjs/common';
import { CreateProductOrderDto } from './dto/create-order.dto';
import { UpdateProductOrderDto } from './dto/update-order.dto';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly productOrdersRepository: Repository<Order>,
  ) {}

  create(createProductOrderDto: CreateProductOrderDto) {
    const productOrder = new Order(createProductOrderDto);
    return this.productOrdersRepository.save(productOrder);
  }

  findAll() {
    return this.productOrdersRepository.find();
  }

  findOne(id: number) {
    return this.productOrdersRepository.findOne({ where: { id } });
  }

  findByUserId(userId: number) {
    return this.productOrdersRepository.find({ where: { userId } });
  }

  update(id: number, updateProductOrderDto: UpdateProductOrderDto) {
    return this.productOrdersRepository.update(id, updateProductOrderDto);
  }

  remove(id: number) {
    return this.productOrdersRepository.delete(id);
  }
}
