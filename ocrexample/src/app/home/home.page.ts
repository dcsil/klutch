import { Component } from '@angular/core';
import { NavController, ActionSheetController, LoadingController } from '@ionic/angular';
import { Camera, PictureSourceType } from '@ionic-native/camera/ngx';
import * as Tesseract from 'tesseract.js'
import { NgProgress, NgProgressRef } from '@ngx-progressbar/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  selectedImage: string;
  imageText: string;

  progressRef: NgProgressRef;

  constructor(private ngProgress: NgProgress, public navCtrl: NavController, private camera: Camera, 
    private actionSheetCtrl: ActionSheetController, public progress: NgProgress) {}
  
    async selectSource() {    
      let actionSheet = this.actionSheetCtrl.create({
        buttons: [
          {
            text: 'Use Library',
            handler: () => {
              this.getPicture(this.camera.PictureSourceType.PHOTOLIBRARY);
            }
          }, {
            text: 'Capture Image',
            handler: () => {
              this.getPicture(this.camera.PictureSourceType.CAMERA);
            }
          }, {
            text: 'Cancel',
            role: 'cancel'
          }
        ]
      });
      (await actionSheet).present();
    }

    getPicture(sourceType: PictureSourceType) {
      this.camera.getPicture({
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: sourceType,
        allowEdit: true,
        saveToPhotoAlbum: false,
        correctOrientation: true
      }).then((imageData) => {
        this.selectedImage = `data:image/jpeg;base64,${imageData}`;
      });
    }
   
    recognizeImage() {
      Tesseract.recognize(this.selectedImage)
      // .progress(message => {
      //   if (message.status === 'recognizing text')
      //   this.progressRef.set(message.progress);
      // })
      .catch(err => console.error(err))
      .then(result => {
        console.log(result)
        this.imageText = result.text;
      });
      // .finally(resultOrError => {
      //   this.progressRef.complete();
      // });
    }

}
