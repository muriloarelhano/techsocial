import { IsNumber, IsPositive, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductOrderDto {
  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  userId: number;

  @IsString()
  description: string;

  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  quantity: number;

  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  price: number;
}
