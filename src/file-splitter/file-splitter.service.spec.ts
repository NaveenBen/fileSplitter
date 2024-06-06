import { Test, TestingModule } from '@nestjs/testing';
import { FileSplitterService } from './file-splitter.service';

describe('FileSplitterService', () => {
  let service: FileSplitterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileSplitterService],
    }).compile();

    service = module.get<FileSplitterService>(FileSplitterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
