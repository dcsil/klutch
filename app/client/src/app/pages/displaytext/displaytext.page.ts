import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-displaytext',
  templateUrl: './displaytext.page.html',
  styleUrls: ['./displaytext.page.scss'],
})
export class DisplaytextPage implements OnInit {

  imageText: string;
  docID: number;

  constructor(private router: Router, private firebaseService: FirebaseService, private storage: Storage) { }

  /**
   * Retrieves image of analyzed text from Firebase storage
   * and display it on the app.
   */
  ngOnInit() {
    this.storage.get('currentID')
      .then(id => {
        console.log("id: ", id);
        this.docID = id;

        this.firebaseService.retrieveData("TEXT", this.docID).then(res => {
          this.imageText = res;
          console.log(this.imageText);
        });
      });
  }

  /**
   * Navigates to success page.
   */
  goToSuccessPage(){
    // update docID
    const newID = this.docID + 1;
    this.storage.set('currentID', newID)
      .then(res => {
        this.router.navigateByUrl(`success`);
      });
  }

}
