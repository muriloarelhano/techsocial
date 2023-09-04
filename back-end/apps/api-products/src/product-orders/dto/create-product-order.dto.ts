import { IsNumber, IsString, Min } from 'class-validator';

export class CreateProductOrderDto {
  @IsNumber()
  userId: number;

  @IsString()
  description: string;

  @IsNumber()
  @Min(1)
  quantity: number;

  @IsNumber()
  @Min(0)
  price: number;
}
