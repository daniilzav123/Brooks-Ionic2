import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { LoginScreen } from "../LoginScreen/LoginScreen"

@Component({
  selector: 'page-introscreen',
  templateUrl: 'IntroScreen.html'
})
export class IntroScreen {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {

  }

  onLogin() {
    this.navCtrl.push(LoginScreen);
  }
}
