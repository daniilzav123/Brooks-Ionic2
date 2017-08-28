import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {ApiService} from "../../../../services/apiService"

@Component({
  selector: 'page-loghours',
  templateUrl: 'LogHours.html'
})
export class LogHours {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public apiService: ApiService
  ) {

  }

  onBack() {
    this.navCtrl.pop();
  }

  onSubmit() {
    let data = {
      data: "test"
    };
    this.apiService.post('/equip/log', data, 'Logging...').subscribe(
      data => {
        console.log('DATA', data);
        this.navCtrl.pop();
      },
      error => {
        console.log(error);
      }
    );
  }
}
