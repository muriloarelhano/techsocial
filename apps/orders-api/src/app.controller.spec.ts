import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('ApiProductsController', () => {
  let apiProductsController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    apiProductsController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return app status', () => {
      expect(JSON.stringify(apiProductsController.health())).toBe(
        JSON.stringify({ status: 'ok' }),
      );
    });
  });
});
