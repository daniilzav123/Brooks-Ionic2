import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {ApiService} from "../../../../services/apiService"

@Component({
  selector: 'page-loghours',
  templateUrl: 'LogHours.html'
})
export class LogHours {
  public myDate: any;
  public myHour: number;
  public index: number;
  public job_list = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public apiService: ApiService
  ) {
    this.index = this.navParams.get("index");
    this.myHour = 0;
  }

  onBack() {
    this.navCtrl.pop();
  }

  ngOnInit() {
    let data = {
    };
    this.apiService.post('/equip/search', data, 'Logging...').subscribe(
      data => {
        console.log('DATA', data);
        // this.job_list = data.response;
        for (let i = 0; i < data.response.length; i++) {
          if (data.response[i].jobID == this.index) {
            this.job_list.push(data.response[i]);
          }
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    let data = {
      id: this.index,
      date: this.myDate,
      hour: this.myHour
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
