import { Injectable, HttpException } from '@nestjs/common';
import { Vision } from './vision.model';
import * as vision from '@google-cloud/vision';
import { IMAGES } from './vision.mock';

const visionClient =  new vision.ImageAnnotatorClient();
// const image = "/Users/shawneerizqa/Desktop/note_example.jpg";

@Injectable()
export class VisionService {
  
  images = IMAGES;
  image: string;
  img: string;
  
  vision: Vision[] = [
    {
      id: 1,
      title: 'Rescue cat stuck in asteroid',
      reward: 500,
      active: true,
    },
    {
      id: 2,
      title: 'Escort Royal Fleet',
      reward: 5000,
      active: true,
    },
    {
      id: 3,
      title: 'Pirates attacking the station',
      reward: 2500,
      active: false,
    },
  ];

  async getVision(): Promise<Vision[]> {
    return this.vision;
  }

  addImage(image): Promise<any> {
    return new Promise(resolve => {
        this.images.push(image);
        resolve(this.images);
    });
  } 

  getImage(id): string {
    const data = this.images.find(img => img.id === id);
    // console.log(data);
    this.image = String(data.image);
    // console.log(this.image);
    return this.image;
}

  async recognizeImage(image: string) {
    const [result] = await visionClient.documentTextDetection(image);
    const fullTextAnnotation = result.fullTextAnnotation;
    console.log("text", fullTextAnnotation);
    console.log(result);
    return fullTextAnnotation;
  }
}