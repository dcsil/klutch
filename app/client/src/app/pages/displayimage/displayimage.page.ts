import { Component, OnInit } from '@angular/core';
import { VisionService } from 'src/app/services/vision.service';

@Component({
  selector: 'app-displayimage',
  templateUrl: './displayimage.page.html',
  styleUrls: ['./displayimage.page.scss'],
})
export class DisplayimagePage implements OnInit {

  displayImage: string;
  // public progVal: number;
  flag: boolean;

  constructor(private vision: VisionService) { }

  /**
   * Retrieves image of note from Firebase storage
   * and display it on the app.
   */
  ngOnInit() {
    this.vision.retrieveData("IMAGE").then(res => {
      this.displayImage = res;
      console.log(this.displayImage);
    });
    this.flag = false;
  }

  /**
   * Calls service to analyze image with Google
   * Vision API.
   */
  async recognizeImage() {
    this.flag = true;
    this.vision.recognizeImage(this.displayImage);
    this.flag = false;
  }

}
