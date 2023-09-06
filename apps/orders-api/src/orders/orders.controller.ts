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
import { CreateProductOrderDto } from './dto/create-order.dto';
import { UpdateProductOrderDto } from './dto/update-order.dto';
import { OrdersService } from './orders.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Product Orders')
@Controller('orders')
@UsePipes(new ValidationPipe({ transform: true }))
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async create(@Body() createProductOrderDto: CreateProductOrderDto) {
    const { userId } = createProductOrderDto;

    try {
      const user = await (
        await fetch(
          `http://localhost:${process.env.APP_USERS_API_PORT}/users/${userId}`,
        )
      ).json();

      if (user) {
        return this.ordersService.create(createProductOrderDto);
      }
    } catch (error) {
      throw new BadRequestException('invalid user id association');
    }
  }

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }

  @Get('/user/:userId')
  findByUser(@Param('userId') userId: string) {
    return this.ordersService.findByUserId(+userId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductOrderDto: UpdateProductOrderDto,
  ) {
    return this.ordersService.update(+id, updateProductOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }
}
