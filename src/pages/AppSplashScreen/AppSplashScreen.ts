import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {IntroScreen} from "../IntroScreen/IntroScreen";

@Component({
  selector: 'page-appsplashscreen',
  templateUrl: 'AppSplashScreen.html'
})
export class AppSplashScreen {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

  ngOnInit() {
    this.navCtrl.push(IntroScreen);
  }
}
