import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('Application')
@Controller()
export class AppController {
  constructor(private readonly apiProductsService: AppService) {}

  @Get('health')
  health() {
    return this.apiProductsService.health();
  }
}
