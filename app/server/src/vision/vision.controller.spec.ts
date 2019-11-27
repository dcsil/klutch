import { Test, TestingModule } from '@nestjs/testing';
import { VisionController } from './vision.controller';
import { VisionService } from './vision.service';

describe('Vision Controller', () => {
  let controller: VisionController;
  let service: VisionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VisionController],
      providers: [VisionService],
    }).compile();

    controller = module.get<VisionController>(VisionController);
    service = module.get<VisionService>(VisionService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
