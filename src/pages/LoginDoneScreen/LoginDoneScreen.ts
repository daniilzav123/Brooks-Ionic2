import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {ApplicationLogScreen} from "../ApplicationLogScreen/ApplicationLogScreen";
import {EquipmentLogScreen} from "../EquipmentLogScreen/EquipmentLogScreen";

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
    this.navCtrl.push(ApplicationLogScreen);
  }

  onEquipmentLog() {
    this.navCtrl.push(EquipmentLogScreen);
  }

  onReminder() {
  }

  onBack() {
    this.navCtrl.pop();
  }

}
