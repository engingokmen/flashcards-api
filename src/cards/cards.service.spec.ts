import { Test, TestingModule } from '@nestjs/testing';
import { CardsService } from './cards.service';

describe('Cards', () => {
  let provider: CardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CardsService],
    }).compile();

    provider = module.get<CardsService>(CardsService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
