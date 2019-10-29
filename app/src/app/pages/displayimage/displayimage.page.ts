import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

import { TesseractService } from '../../services/tesseract.service';
import { TesseractJob } from 'tesseract.js';

@Component({
  selector: 'app-displayimage',
  templateUrl: './displayimage.page.html',
  styleUrls: ['./displayimage.page.scss'],
})
export class DisplayimagePage implements OnInit {

  displayImage: string;
  tessJob: TesseractJob;
  imageText: string;

  constructor(private router: Router, private storage: Storage, private tesseract: TesseractService) { }

  ngOnInit() {
    this.storage.get('0').then((val) => {
      this.displayImage = val;
    });
  }

  async recognizeImage() {
    this.tessJob = this.tesseract.recognizeImage(this.displayImage);
    this.imageText = (await this.tessJob).text;
    this.storage.set('1', this.imageText);
    this.router.navigateByUrl(`displaytext`)
  }

}
