import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { users } from 'mocks';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should return array of users', async () => {
    jest.spyOn(service, 'findAll').mockImplementation(async () => users);
    expect(await service.findAll()).toBeInstanceOf(Array);
    expect(await service.findAll()).toBe(users);
    expect(await service.findAll()).toHaveLength(1);
  });
});
