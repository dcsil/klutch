import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VisionService } from './vision/vision.service';
import { VisionController } from './vision/vision.controller';

@Module({
  imports: [],
  controllers: [AppController, VisionController],
  providers: [AppService, VisionService],
})
export class AppModule {}
