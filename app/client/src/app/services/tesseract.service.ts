import { Injectable } from '@angular/core';
import * as Tesseract from 'tesseract.js';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TesseractService {

  constructor() { }

  recognizeImage(displayImage: string) {
    return Tesseract.recognize(displayImage);
  }
}
