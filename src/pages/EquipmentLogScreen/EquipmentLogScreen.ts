import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {EquipmentSelectedScreen} from "./EquipmentSelectedScreen/EquipmentSelectedScreen";
import {ApiService} from "../../services/apiService";

@Component({
  selector: 'page-equipmentlogscreen',
  templateUrl: 'EquipmentLogScreen.html'
})
export class EquipmentLogScreen {
  public job_list = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public apiService: ApiService
  ) {

  }

  onBack() {
    this.navCtrl.pop();
  }

  onJob(index: any) {
    this.navCtrl.push(EquipmentSelectedScreen, {
      index: index
    });
  }

  ngOnInit() {
    let data = {
    };
    this.apiService.post('/job/search', data, 'Loading...').subscribe(
      data => {
        console.log('DATA', data);
        this.job_list = data.response;
      },
      error => {
        console.log(error);
      }
    );
  }
}
