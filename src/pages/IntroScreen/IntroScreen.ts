import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { LoginScreen } from "../LoginScreen/LoginScreen"
import { NativeStorage } from "ionic-native";
import {LoginDoneScreen} from "../LoginDoneScreen/LoginDoneScreen";

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

  ionViewDidLoad() {
    console.log('come on ngoninit');
    NativeStorage.getItem('loggedIn').then(
      d => {
        if (d === true) {
          console.log('wa true');
          this.navCtrl.push(LoginDoneScreen);
        } else {
          console.log('wa false');
        }
      }, error => {
        console.log('wa error' + error);
      });
  }

  onLogin() {
    this.navCtrl.push(LoginScreen);
  }
}
