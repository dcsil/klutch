import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-displaytext',
  templateUrl: './displaytext.page.html',
  styleUrls: ['./displaytext.page.scss'],
})
export class DisplaytextPage implements OnInit {

  imageText: string;
  docID: number;
  entityData: any;

  constructor(private router: Router, private firebaseService: FirebaseService, private storage: Storage,
              private http: HttpClient) { }

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

  getEntityAnalysis(imageText) {
    let loadingMsg = 'Analyzing your text. Please wait.';
    this.firebaseService.showLoader(loadingMsg);

    let header = { "Content-Type": "application/json"};
    let data = {
      id: 1,
      text: imageText
    };
    let serverUrl = 'https://klucth-app.herokuapp.com/watson';
    this.http.post(serverUrl, data, {headers: header, responseType: 'json'})
      .subscribe(async response => {
        this.entityData = response;
        console.log("http response: ", this.entityData);
        await this.firebaseService.uploadImageData('ENTITY', this.entityData, this.docID)
          .then( res => {
            this.firebaseService.hideLoader();
            this.router.navigateByUrl('entityanalysis');
          })
      });
  }

  /**
   * Navigates to success page.
   */
  showEntityAnalysis() {
    console.log("edited text: ", this.imageText);
    this.getEntityAnalysis(this.imageText);
  }

}
