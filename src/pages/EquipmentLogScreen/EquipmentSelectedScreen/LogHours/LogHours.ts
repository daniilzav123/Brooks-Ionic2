import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {ApiService} from "../../../../services/apiService"

@Component({
  selector: 'page-loghours',
  templateUrl: 'LogHours.html'
})
export class LogHours {
  public myDate: any;
  public index: number;
  public job_list = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public apiService: ApiService
  ) {
    this.index = this.navParams.get("index");
  }

  onBack() {
    this.navCtrl.pop();
  }

  ngOnInit() {
    this.job_list = [
      {
        date: "1",
        hour: "1"
      },
      {
        date: "2",
        hour: "2"
      },
      {
        date: "3",
        hour: "3"
      },
      {
        date: "4",
        hour: "4"
      },
      {
        date: "5",
        hour: "5"
      },
      {
        date: "1",
        hour: "1"
      },
      {
        date: "2",
        hour: "2"
      },
      {
        date: "3",
        hour: "3"
      },
      {
        date: "4",
        hour: "4"
      },
      {
        date: "5",
        hour: "5"
      },
    ]
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

  onUpdateToggle() {

  }
}
