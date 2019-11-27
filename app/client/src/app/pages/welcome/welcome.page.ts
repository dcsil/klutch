import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  srcType: string;
  cameraSourceType: PictureSourceType;
  selectedImage: string;
  displayImage: string;
  imageText: string;
  docID: number;

  constructor(private camera: Camera, private firebaseService: FirebaseService, private menu: MenuController,
              private storage: Storage) { }

  ngOnInit() {
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  /**
   * This function takes a picture either with a camera
   * or from the user's photo library, then uploads it
   * to Firebase storage and database.
   * 
   * @param {String} srcType The source for the picture.
   * @return {void}
   */
  async getPicture(srcType) {
    if (srcType == 'CAMERA')
    {
      this.cameraSourceType = this.camera.PictureSourceType.CAMERA;
    }
    else if (srcType == 'PHOTOLIBRARY')
    {
      this.cameraSourceType = this.camera.PictureSourceType.PHOTOLIBRARY;
    }

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.cameraSourceType,
      allowEdit: true,
      saveToPhotoAlbum: false,
      correctOrientation: true
    }

    const imageData = await this.camera.getPicture(options)
    this.selectedImage = `data:image/jpeg;base64,${imageData}`;
    this.storage.get('currentID')
      .then(id => {
        this.docID = id;
        console.log("docID:", id);
        this.firebaseService.uploadImage(this.selectedImage, this.docID);
      });
  }


}
