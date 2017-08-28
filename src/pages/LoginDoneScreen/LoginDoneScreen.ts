import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {ApplicationLogScreen} from "../ApplicationLogScreen/ApplicationLogScreen";
import {EquipmentLogScreen} from "../EquipmentLogScreen/EquipmentLogScreen";
import {ApiService} from "../../services/apiService";
import {NativeStorage} from "ionic-native";

@Component({
  selector: 'page-logindonescreen',
  templateUrl: 'LoginDoneScreen.html'
})
export class LoginDoneScreen {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public apiService: ApiService,
  ) {

  }

  onApplicationLog() {
    this.navCtrl.push(ApplicationLogScreen);
  }

  onEquipmentLog() {
    this.navCtrl.push(EquipmentLogScreen);
  }

  onReminder() {
    let data = {
      data: "test"
    };
    this.apiService.post('/task/reminder', data, 'Loading...').subscribe(
      data => {
        console.log('DATA', data);
      },
      error => {
        console.log(error);
      }
    );

  }

  onBack() {
    this.navCtrl.pop();
  }

  onLogout() {
    NativeStorage.setItem('loggedIn', false)
      .then((d) => {
        console.log('wa true' + d);
        this.navCtrl.pop();
      }, error => console.error('Error storing LoginData', error));
  }
}
