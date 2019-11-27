import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-displayimage',
  templateUrl: './displayimage.page.html',
  styleUrls: ['./displayimage.page.scss'],
})
export class DisplayimagePage implements OnInit {

  displayImage: string;
  // public progVal: number;
  flag: boolean;
  docID: number;

  constructor(private firebase: FirebaseService, private storage: Storage) { }

  /**
   * Retrieves image of note from Firebase storage
   * and display it on the app.
   */
  ngOnInit() {  
    // this.flag = false;

    this.storage.get('currentID')
      .then(id => {
        console.log("id: ", id);
        this.docID = id;

        this.firebase.retrieveData("IMAGE", this.docID).then(res => {
          this.displayImage = res;
          console.log(this.displayImage);
        });

      });
  }

  /**
   * Calls service to analyze image with Google
   * firebase API.
   */
  async recognizeImage() {
    this.flag = true;
    this.firebase.recognizeImage(this.displayImage, this.docID);
    this.flag = false;
  }

}
