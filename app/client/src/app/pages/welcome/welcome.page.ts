import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController, LoadingController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
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

  private win: any = window;

  constructor(private camera: Camera, private router: Router, private storage: Storage,
    private menu: MenuController) { }

  ngOnInit() {
    this.storage.clear();
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

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
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: true,
      saveToPhotoAlbum: false,
      correctOrientation: true
    }

    const imageData = await this.camera.getPicture(options)
    // this.selectedImage = base64;
    this.selectedImage = `data:image/jpeg;base64,${imageData}`;
    this.storage.set('1', this.selectedImage);
    this.router.navigateByUrl(`displayimage`);

    // this.camera.getPicture({
    //   quality: 100,
    //   destinationType: this.camera.DestinationType.DATA_URL,
    //   encodingType: this.camera.EncodingType.JPEG,
    //   mediaType: this.camera.MediaType.PICTURE,
    //   sourceType: this.cameraSourceType,
    //   allowEdit: true,
    //   saveToPhotoAlbum: false,
    //   correctOrientation: true
    // }).then((imageData) => {
    //   // set a key/value
    //   this.selectedImage = `data:image/jpeg;base64,${imageData}`;
    //   // let filePath = this.win.Ionic.WebView.convertFileSrc(imageData);
    //   // this.selectedImage = filePath;
    //   // console.log(imageData);
    //   // console.log(this.selectedImage);
    //   this.storage.set('1', this.selectedImage);
    //   this.router.navigateByUrl(`displayimage`);
    // });
  }


}
