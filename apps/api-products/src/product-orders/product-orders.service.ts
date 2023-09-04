import { Injectable } from '@nestjs/common';
import { CreateProductOrderDto } from './dto/create-product-order.dto';
import { UpdateProductOrderDto } from './dto/update-product-order.dto';
import { Repository } from 'typeorm';
import { ProductOrder } from './entities/product-order.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductOrdersService {
  constructor(
    @InjectRepository(ProductOrder)
    private readonly productOrdersRepository: Repository<ProductOrder>,
  ) {}

  create(createProductOrderDto: CreateProductOrderDto) {
    const productOrder = new ProductOrder(createProductOrderDto);
    return this.productOrdersRepository.save(productOrder);
  }

  findAll() {
    return this.productOrdersRepository.find();
  }

  findOne(id: number) {
    return this.productOrdersRepository.findOne({ where: { id } });
  }

  update(id: number, updateProductOrderDto: UpdateProductOrderDto) {
    return this.productOrdersRepository.update(id, updateProductOrderDto);
  }

  remove(id: number) {
    return this.productOrdersRepository.delete(id);
  }
}
