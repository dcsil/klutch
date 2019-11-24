import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from 'angularfire2/storage';
import { AngularFirestore} from 'angularfire2/firestore';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  task: AngularFireUploadTask;
  ref: AngularFireStorageReference;
  imageText: string;
  dataField: string;
  data: string;
  docID: number;
  unsub: any;
  ip: string = "192.168.0.146";

  constructor(private http: HttpClient,
              private router: Router,
              private storage: Storage,
              private fireStorage: AngularFireStorage, 
              private db: AngularFirestore, 
              private loadingCtrl: LoadingController) {}
  
  /**
   * 1. Checks DB if "patients" collection already exists.
   *    If not, create a new collection and set current 
   *    docID to 0.
   * 2. Else, retrieve, the ID of the last doc in the collection
   *    and set current docID to lastID + 1.
   * 3. Save this ID into local storage.
   */
  initializeDB() {
    const docRef = this.db.collection('patients').get()
      .subscribe(collection => {
        var length = collection.docs.length;
        if (length == 0) {
          console.log("Collection doesn't exist! Creating a new one...")
          this.docID = 0;
        }
        else {
          console.log("Collection has docs");
          
          // create a listener to query
          this.unsub = collection.query.orderBy("patientID")
            .limitToLast(1)
              .onSnapshot(res => {
                this.docID = Number(res.docs[0].id.slice(7)) + 1;
                console.log("docID initialize: ", this.docID);
                this.storage.set('currentID', this.docID);
              });
        }  
      })
  }

  async uploadImageToDB(url, id) {
    console.log("id: ", id);

    const docID = `patient${id}`;
    const docRef = this.db.collection('patients').doc(docID);
    const patientID = id;
    const imageUrl = url;
    const imageText = "";
    await docRef.set({ patientID, imageUrl, imageText})
      .then(res => {
        console.log("data uploaded to database");
        this.router.navigateByUrl(`displayimage`);
      }); 
  }

  /**
   * This function does the following:
   * 1. Creates a new document in Firebase database.
   * 2. Uploads image to Firebase storage and retrieves the download URL.
   * 3. Saves image URL into the newly created document in DB.
   * 4. Navigates to the displayimage page as the final step.
   * 
   * @param {String} base64 Image representation as a base-64 encoded string.
   */
  async uploadImage(base64, docID) {
    // let loading = this.loadingCtrl.create({
    //   message: "Uploading your image...",
    //   spinner: 'circles'
    // });

    // this.loadingCtrl
    
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

          this.uploadImageToDB(url, docID);
        });
      })
    ).subscribe();

    // unsubscribe from query listener
    this.unsub();
  }

  /**
   * Retrieves the corresponding image document in DB and updates
   * the imageText field with the analyzed text.
   * 
   * @param {String} imageText Analyzed text returned from the Google Vision API.
   */
  async uploadImageText(imageText, id) {
    const docID = `patient${id}`;
    const patientRef = this.db.collection('patients').doc(docID);
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
  recognizeImage(imageUrl, docID) {
    let header = { "Content-Type": "application/json"};
    let data = {
      id: 1,
      image: imageUrl
    };
    let serverUrl = `http://${this.ip}:3000/vision`
    this.http.post(serverUrl, data, {headers: header, responseType: 'text'})
      .subscribe(response => {
        this.imageText = response;
        console.log("http response: ", this.imageText);
        this.uploadImageText(this.imageText, docID)
          .then(res => {
              this.router.navigateByUrl(`displaytext`);
            });
      });
  }

  /**
   * Retrieves selected data from Firebase DB.
   * 
   * @param {String} dataType Either the image itself or the analyzed text.
   */
  async retrieveData(dataType, id) {
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
    const docID = `patient${id}`;
    console.log("docID:", docID);
    const patientRef = this.db.collection('patients').doc(docID);
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
