import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-notes',
  templateUrl: 'Notes.html'
})
export class Notes {
  note: string;
  photoAdded = false;
  photoUrl = null;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera
  ) {
    this.note = "";
  }

  onBack() {
    this.navCtrl.pop();
  }

  onSubmit() {
    this.navParams.get('parent').setNotes(this.note);
    this.navCtrl.pop();
  }

  onCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.photoUrl = base64Image;
      this.photoAdded = true;
    }, (err) => {
      // Handle error
    });
  }
}
