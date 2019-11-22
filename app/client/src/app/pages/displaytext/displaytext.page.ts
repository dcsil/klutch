import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

import { TesseractService } from '../../services/tesseract.service';
import { TesseractJob } from 'tesseract.js';
import { Observable } from 'rxjs';
import { VisionService } from 'src/app/services/vision.service';
import { AngularFireStorage } from 'angularfire2/storage';


@Component({
  selector: 'app-displaytext',
  templateUrl: './displaytext.page.html',
  styleUrls: ['./displaytext.page.scss'],
})
export class DisplaytextPage implements OnInit {

  tessJob: TesseractJob;
  imageText: string;
  visions: Observable<any>;
  image: string;
  sliced: string;
  imageUrl: Observable<string>;

  constructor(private router: Router, private storage: Storage, private visionService: VisionService,
              private afs: AngularFireStorage) { }

  ngOnInit() {
    // this.storage.get('1').then((val) => {
    //   this.image = val;
    //   // console.log(this.image);

    // hardcoded image. this can be anything local to test.
    this.image = "/Users/shawneerizqa/Desktop/note.jpg";
    this.visionService.getVision(this.image).subscribe((result) => {
      console.log(result);
      this.imageText = result.text;
    });
    // });    
  }

  goToSuccessPage(){
    this.router.navigateByUrl(`success`);
  }

}
