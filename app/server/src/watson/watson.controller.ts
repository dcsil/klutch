import { Controller, Get, Post, Body } from '@nestjs/common';
import { WatsonService } from './watson.service';
import { WatsonDto } from './watson.dto';

@Controller('watson')
export class WatsonController {
    constructor(private watsonService: WatsonService) {}

    @Get()
    getWatson() {
        console.log("GET request was called");
        return "Hello Watson!";
    }

    @Post()
    postWatson(@Body() watson: WatsonDto) {
        console.log("POST request was called");
        console.log(watson);
        return this.watsonService.getEntityAnalysis(watson.text);
    }
}
