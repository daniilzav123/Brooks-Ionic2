import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {LoginDoneScreen} from "../LoginDoneScreen/LoginDoneScreen";
import {ApiService} from "../../services/apiService"
import {NativeStorage} from "ionic-native";
import {SingletonService} from "../../services/singletoneService";

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
    public apiService: ApiService,
    public singletonService: SingletonService
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
        this.singletonService.loginUser = this.username;
        NativeStorage.setItem('loggedIn', this.username)
          .then((d) => {
            console.log('wa true' + d);
            this.navCtrl.push(LoginDoneScreen);
          },
          error => {
            console.error('Error storing LoginData', error);
          }
        );
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
