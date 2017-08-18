import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {LoginDoneScreen} from "../LoginDoneScreen/LoginDoneScreen";
import {ApiService} from "../../services/apiService"

@Component({
  selector: 'page-loginscreen',
  templateUrl: 'LoginScreen.html'
})
export class LoginScreen {

  username: string;
  password: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public apiService: ApiService
  ) {
    this.username = "";
    this.password = "";
  }

  onLogin() {
    let data = {
      username: this.username,
      password: this.password
    };
    this.apiService.post('/login', data, 'Logging in...').subscribe(
      data => {
        console.log('DATA', data);
        this.navCtrl.push(LoginDoneScreen);
      },
      error => {
        console.log(error);
      }
    );
  }
  // onLogin() {
  //   this.navCtrl.push(LoginDoneScreen);
  // }

  onBack() {
    this.navCtrl.pop();
  }
}
