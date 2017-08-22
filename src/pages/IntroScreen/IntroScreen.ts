import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { LoginScreen } from "../LoginScreen/LoginScreen"
import { NativeStorage } from "ionic-native";
import {LoginDoneScreen} from "../LoginDoneScreen/LoginDoneScreen";
import {SingletonService} from "../../services/singletoneService";

@Component({
  selector: 'page-introscreen',
  templateUrl: 'IntroScreen.html'
})
export class IntroScreen {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public singletonService: SingletonService
  ) {
  }

  ngOnInit() {
    console.log('come on ngoninit');
    NativeStorage.getItem('loggedIn').then(
      d => {
        if (d == "" || d == null) {
          console.log('wa false');
        } else {
          console.log('wa true');
          this.singletonService.loginUser = d;
          this.navCtrl.push(LoginDoneScreen);
        }
      }, error => {
        console.log('wa error' + error);
      });
  }

  onLogin() {
    this.navCtrl.push(LoginScreen);
  }
}
