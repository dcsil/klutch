import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { VisionService } from 'src/app/services/vision.service';

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

  constructor(private camera: Camera, private visionService: VisionService, private menu: MenuController) { }

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
    // this.storage.set('1', this.selectedImage);
    this.visionService.uploadImage(this.selectedImage)
  }


}
