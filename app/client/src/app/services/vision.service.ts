import { Injectable } from '@angular/core';
import * as vision from '@google-cloud/vision';
import { HttpClient } from '@angular/common/http';

import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap, filter } from 'rxjs/operators';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { AngularFirestore} from 'angularfire2/firestore';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class VisionService {

  // Upload task
  task: AngularFireUploadTask;
  // Firestore data
  result$: Observable<any>;
  image: string;
  currentImage: string;
  imageUrl: string;

  constructor(private http: HttpClient,
              private fireStorage: AngularFireStorage, 
              private afs: AngularFirestore, 
              private loadingCtrl: LoadingController,
              private ionicStorage: Storage) {}

  onSuccess = snapshot => {
    this.currentImage = snapshot.downloadURL;
    console.log(this.currentImage);
  };
  
  onError = error => {
    console.log("error", error);
  };

  uploadAndRecognize(base64: string) {
    console.log(base64.slice(0, 50));

    const docId = this.afs.createId();

    const path = `${docId}.jpg`;

    // Make a reference to the future location of the firestore document
    const photoRef = this.afs.collection('photos').doc(docId);
    
    // Firestore observable, dismiss loader when data is available
    this.result$ = photoRef.valueChanges();
    console.log("result:", this.result$);
        // .pipe(
        //   filter(data => !!data),
        //   tap(_ => this.loading.dismiss())
        // );
    
    // The main task
    this.image = base64;
    this.task = this.fireStorage.ref(path).putString(this.image, 'data_url'); 

    // TODO: don't hardcode this
    const ref = this.fireStorage.ref('8RnUczffiRz1Buyn8fyC.jpg');
    ref.getDownloadURL().subscribe(url => {
      this.ionicStorage.set('2', url);
    });
  }

  getVision(image: string) {
    // this.ionicStorage.get('2').then((val) => {
    //   this.imageUrl = val;
    //   console.log(this.imageUrl); 
    // });
    console.log(image);
    let header = { "Content-Type": "application/json"};
    let data = {
      id: 1,
      image: image
    };
    return this.http.post('http://100.67.25.96:3000/vision', data, {headers: header});
  }

}
