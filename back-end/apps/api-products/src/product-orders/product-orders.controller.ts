import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateProductOrderDto } from './dto/create-product-order.dto';
import { UpdateProductOrderDto } from './dto/update-product-order.dto';
import { ProductOrdersService } from './product-orders.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Product Orders')
@Controller('product-orders')
@UsePipes(new ValidationPipe({ transform: true }))
export class ProductOrdersController {
  constructor(private readonly productOrdersService: ProductOrdersService) {}

  @Post()
  async create(@Body() createProductOrderDto: CreateProductOrderDto) {
    const { userId } = createProductOrderDto;

    try {
      const user = await (
        await fetch(`http://localhost:3000/users/${userId}`)
      ).json();

      if (user) {
        return this.productOrdersService.create(createProductOrderDto);
      }
    } catch (error) {
      throw new BadRequestException('invalid user id association');
    }
  }

  @Get()
  findAll() {
    return this.productOrdersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productOrdersService.findOne(+id);
  }

  @Get('/user/:userId')
  findByUser(@Param('userId') userId: string) {
    return this.productOrdersService.findByUserId(+userId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductOrderDto: UpdateProductOrderDto,
  ) {
    return this.productOrdersService.update(+id, updateProductOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productOrdersService.remove(+id);
  }
}
