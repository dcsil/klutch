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

  tessJob: TesseractJob;
  imageText: string;

  constructor(private router: Router, private storage: Storage, private tesseract: TesseractService) { }

  ngOnInit() {
    this.storage.get('1').then((val) => {
      this.imageText = val;
    });
  }

  goToSuccessPage(){
    this.router.navigateByUrl(`success`);
  }

}
