import { Injectable, HttpException } from '@nestjs/common';
import * as vision from '@google-cloud/vision';

const visionClient =  new vision.ImageAnnotatorClient();

@Injectable()
export class VisionService {
  /**
   * Calls the Google Vision API to perform document text detection.
   * 
   * @param {String} image Image URL retrieved from client.
   */
  async recognizeImage(image) {
    const [result] = await visionClient.documentTextDetection(image);
    const fullTextAnnotation = result.fullTextAnnotation;
    console.log("text", fullTextAnnotation);
    console.log(result.fullTextAnnotation);
    return fullTextAnnotation.text;
  }
}