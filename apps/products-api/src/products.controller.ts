import { Controller, Get } from '@nestjs/common';
import { ApiProductsService } from './products.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Application')
@Controller()
export class ApiProductsController {
  constructor(private readonly apiProductsService: ApiProductsService) {}

  @Get('health')
  health(): string {
    return this.apiProductsService.health();
  }
}
