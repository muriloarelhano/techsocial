import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiProductsService {
  health(): string {
    return 'Hello World!';
  }
}
