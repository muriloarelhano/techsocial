import { PartialType } from '@nestjs/swagger';
import { CreateProductOrderDto } from './create-order.dto';

export class UpdateProductOrderDto extends PartialType(CreateProductOrderDto) {}
