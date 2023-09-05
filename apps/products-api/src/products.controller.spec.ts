import { Test, TestingModule } from '@nestjs/testing';
import { ApiProductsController } from './products.controller';
import { ApiProductsService } from './products.service';

describe('ApiProductsController', () => {
  let apiProductsController: ApiProductsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ApiProductsController],
      providers: [ApiProductsService],
    }).compile();

    apiProductsController = app.get<ApiProductsController>(
      ApiProductsController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(apiProductsController.health()).toBe('Hello World!');
    });
  });
});