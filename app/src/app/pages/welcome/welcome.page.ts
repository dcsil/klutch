import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Camera, PictureSourceType } from '@ionic-native/camera/ngx';
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

  constructor(private camera: Camera, private router: Router, private storage: Storage) { }

  ngOnInit() {
  }

  getPicture(srcType) {
    if (srcType == 'CAMERA')
    {
      this.cameraSourceType = this.camera.PictureSourceType.CAMERA;
    }
    else if (srcType == 'PHOTOLIBRARY')
    {
      this.cameraSourceType = this.camera.PictureSourceType.PHOTOLIBRARY;
    }

    console.log(this.cameraSourceType);
    // this.router.navigateByUrl(`/displaytext/45`)
    

    this.camera.getPicture({
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.cameraSourceType,
      allowEdit: true,
      saveToPhotoAlbum: false,
      correctOrientation: true
    }).then((imageData) => {
      // set a key/value
      this.selectedImage = `data:image/jpeg;base64,${imageData}`;

      this.storage.set('0', this.selectedImage);

      this.router.navigateByUrl(`displaytext`)
    });
  }


}
