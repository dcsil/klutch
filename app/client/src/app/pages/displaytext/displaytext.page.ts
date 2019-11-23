import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VisionService } from 'src/app/services/vision.service';

@Component({
  selector: 'app-displaytext',
  templateUrl: './displaytext.page.html',
  styleUrls: ['./displaytext.page.scss'],
})
export class DisplaytextPage implements OnInit {

  imageText: string;

  constructor(private router: Router, private visionService: VisionService) { }

  /**
   * Retrieves image of analyzed text from Firebase storage
   * and display it on the app.
   */
  ngOnInit() {
    this.visionService.retrieveData("TEXT").then(res => {
      this.imageText = res;
      console.log(this.imageText);
    });
  }

  /**
   * Navigates to success page.
   */
  goToSuccessPage(){
    this.router.navigateByUrl(`success`);
  }

}
