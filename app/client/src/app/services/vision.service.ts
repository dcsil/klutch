import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from 'angularfire2/storage';
import { AngularFirestore} from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class VisionService {

  task: AngularFireUploadTask;
  ref: AngularFireStorageReference;
  imageText: string;
  dataField: string;
  data: string;

  constructor(private http: HttpClient,
              private router: Router,
              private fireStorage: AngularFireStorage, 
              private db: AngularFirestore, 
              private loadingCtrl: LoadingController) {}
  
  /**
   * This function does the following:
   * 1. Creates a new document in Firebase database.
   * 2. Uploads image to Firebase storage and retrieves the download URL.
   * 3. Saves image URL into the newly created document in DB.
   * 4. Navigates to the displayimage page as the final step.
   * 
   * @param {String} base64 Image representation as a base-64 encoded string.
   */
  async uploadImage(base64) {

    const id = this.db.createId();
    // upload to storage
    const path = `${id}.jpg`;
    this.ref = this.fireStorage.ref(path);
    this.task = this.ref.putString(base64, 'data_url');
    
    // get download URL
    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.ref.getDownloadURL().subscribe(url => {
          console.log("download url:", url); 

          // upload to database
          const docRef = this.db.collection('patients').doc('patient8');
          const patientID = 0;
          const imageUrl = url;
          const imageText = "";
          docRef.set({ patientID, imageUrl, imageText});
          console.log("data uploaded to database");

          this.router.navigateByUrl(`displayimage`);
        });
      })
    ).subscribe();
  }

  /**
   * Retrieves the corresponding image document in DB and updates
   * the imageText field with the analyzed text.
   * 
   * @param {String} imageText Analyzed text returned from the Google Vision API.
   */
  uploadImageText(imageText) {
    const patientRef = this.db.collection('patients').doc('patient8');
    patientRef.update({ imageText: imageText} );
  }

  /**
   * This function does the following:
   * 1. Submits HTTP POST request to call the Google Vision API in 
   * backend to perform document text detection.
   * 2. Uploads the retrieved analyzed text to DB.
   * 3. Navigates to displaytext page as the final step.
   * 
   * @param {String} imageUrl Download URL for the image.
   */
  recognizeImage(imageUrl) {
    let header = { "Content-Type": "application/json"};
    let data = {
      id: 1,
      image: imageUrl
    };
    this.http.post('http://192.168.0.146:3000/vision', data, {headers: header, responseType: 'text'})
      .subscribe(response => {
        this.imageText = response;
        console.log("http response: ", this.imageText);
        this.uploadImageText(this.imageText);
        this.router.navigateByUrl(`displaytext`);
      });
  }

  /**
   * Retrieves selected data from Firebase DB.
   * 
   * @param {String} dataType Either the image itself or the analyzed text.
   */
  async retrieveData(dataType) {
    if (dataType == "IMAGE")
    {
      this.dataField = "imageUrl";
    }
    else if (dataType == "TEXT")
    {
      this.dataField = "imageText";
    }
    else 
    {
      // TODO: handle error
    }

    // retrieve the last text pushed to the database
    const patientRef = this.db.collection('patients').doc('patient8');
    let getDoc = await patientRef.get()
      .toPromise()
        .then(doc => {
          if (!doc.exists) {
            console.log('No such document!');
          } else {
            console.log("data field: ", this.dataField);
            this.data = doc.get(this.dataField);
            console.log('Document text:', this.data);
          }
      });
    console.log("Text after: ", this.data);
    return this.data;
  }
}
