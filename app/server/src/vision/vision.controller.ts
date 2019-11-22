import { Controller, Get, Post, Body } from '@nestjs/common';
import { VisionService } from './vision.service';
import { VisionDto } from './vision.dto';

@Controller('vision')
export class VisionController {
    constructor(private visionService: VisionService) {}

    @Get()
    getVision() {
        console.log("GET request was called");
        return this.visionService.getVision();
    }

    @Post()
    postVision(@Body() vision: VisionDto) {
        console.log("POST request was called");
        console.log(vision);
        console.log(vision.image);
        return this.visionService.recognizeImage(vision.image);
    }
}
