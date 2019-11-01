import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

import { TesseractService } from '../../services/tesseract.service';
import { TesseractJob } from 'tesseract.js';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-displayimage',
  templateUrl: './displayimage.page.html',
  styleUrls: ['./displayimage.page.scss'],
})
export class DisplayimagePage implements OnInit {

  displayImage: string;
  tessJob: TesseractJob;
  imageText: string;
  public progVal: number;
  flag: boolean;

  constructor(private router: Router, private storage: Storage, 
    private tesseract: TesseractService, public alertController: AlertController) { }

  ngOnInit() {
    this.storage.get('0').then((val) => {
      this.displayImage = val;
    });
    this.progVal = 0;
    this.flag = false;
  }

  async recognizeImage() {
    this.flag = true;
    
    this.tessJob = this.tesseract.recognizeImage(this.displayImage);


    this.tessJob.progress(progress => {
      console.log('progress', progress);
      this.progVal = Number(progress.progress);
    });
    this.imageText = (await this.tessJob).text;
    this.storage.set('1', this.imageText);
    this.router.navigateByUrl(`displaytext`)
    this.flag = false;
  }

}
