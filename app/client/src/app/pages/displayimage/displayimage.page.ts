import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

// import { TesseractService } from '../../services/tesseract.service';
// import { TesseractJob } from 'tesseract.js';
import { AlertController } from '@ionic/angular';
import { VisionService } from 'src/app/services/vision.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-displayimage',
  templateUrl: './displayimage.page.html',
  styleUrls: ['./displayimage.page.scss'],
})
export class DisplayimagePage implements OnInit {

  displayImage: string;
  imageText: string;
  // public progVal: number;
  flag: boolean;

  constructor(private router: Router, private storage: Storage, private vision: VisionService) { }

  ngOnInit() {
    this.storage.get('1').then((val) => {
      this.displayImage = val;
    });
    // this.progVal = 0;
    this.flag = false;
  }

  recognizeImage() {
    this.flag = true;
    
    // this.vision.uploadAndRecognize(this.displayImage)

    this.router.navigateByUrl(`displaytext`);

    this.flag = false;
  }

}
