import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController, LoadingController, MenuController } from '@ionic/angular';
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

  displayImage: string;
  imageText: string;

  constructor(private camera: Camera, private router: Router, private storage: Storage,
    private menu: MenuController) { }

  ngOnInit() {
    this.storage.clear();
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
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
      this.router.navigateByUrl(`displayimage`)
    });
  }


}
