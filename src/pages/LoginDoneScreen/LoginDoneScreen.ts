import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {ApplicationLogScreen} from "../ApplicationLogScreen/ApplicationLogScreen";
import {EquipmentLogScreen} from "../EquipmentLogScreen/EquipmentLogScreen";
import {ApiService} from "../../services/apiService";
import {NativeStorage} from "ionic-native";
import {SingletonService} from "../../services/singletoneService";

@Component({
  selector: 'page-logindonescreen',
  templateUrl: 'LoginDoneScreen.html'
})
export class LoginDoneScreen {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public apiService: ApiService,
    public singletonService: SingletonService
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
    NativeStorage.setItem('loggedIn', "")
      .then((d) => {
        console.log('wa true' + d);
        this.singletonService.loginUser = "";
        this.navCtrl.pop();
      }, error => console.error('Error storing LoginData', error));
  }
}
