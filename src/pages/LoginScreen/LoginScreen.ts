import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-loginscreen',
  templateUrl: 'LoginScreen.html'
})
export class LoginScreen {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {

  }

  onLogin() {
  }
}
