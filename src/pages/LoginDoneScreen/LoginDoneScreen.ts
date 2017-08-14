import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-logindonescreen',
  templateUrl: 'LoginDoneScreen.html'
})
export class LoginDoneScreen {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {

  }

  onApplicationLog() {

  }

  onEquipmentLog() {

  }

  onReminder() {
  }
  
  onBack() {
    this.navCtrl.pop();
  }

}
