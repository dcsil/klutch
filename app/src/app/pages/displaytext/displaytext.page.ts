import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

import { TesseractService } from '../../services/tesseract.service';
import { TesseractJob } from 'tesseract.js';

@Component({
  selector: 'app-displaytext',
  templateUrl: './displaytext.page.html',
  styleUrls: ['./displaytext.page.scss'],
})
export class DisplaytextPage implements OnInit {

  displayImage: string;
  tessJob: TesseractJob;
  imageText: string;

  constructor(private router: Router, private storage: Storage, private tesseract: TesseractService) { }

  ngOnInit() {
    this.storage.get('0').then((val) => {
      console.log(val);
      this.displayImage = val;
    });
  }

  async recognizeImage() {
    this.tessJob = this.tesseract.recognizeImage(this.displayImage);
    this.imageText = (await this.tessJob).text;
  }

  goToSuccessPage(){
    console.warn("HEo")
    this.router.navigateByUrl(`success`);

  }

}
