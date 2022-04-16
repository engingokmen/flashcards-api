import { Test, TestingModule } from '@nestjs/testing';
import { SetsService } from './sets.service';

describe('Sets', () => {
  let provider: SetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SetsService],
    }).compile();

    provider = module.get<SetsService>(SetsService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
