import { Test, TestingModule } from '@nestjs/testing';
import { WatsonController } from './watson.controller';
import { WatsonService } from './watson.service';

describe('Watson Controller', () => {
  let controller: WatsonController;
  let service: WatsonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WatsonController],
      providers: [WatsonService],
    }).compile();

    controller = module.get<WatsonController>(WatsonController);
    service = module.get<WatsonService>(WatsonService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
