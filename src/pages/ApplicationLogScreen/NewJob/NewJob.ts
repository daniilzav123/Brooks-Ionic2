import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {Notes} from "./Notes/Notes";
import {ApiService} from "../../../services/apiService";

@Component({
  selector: 'page-newjob',
  templateUrl: 'NewJob.html'
})
export class NewJob {

  Date: string;
  Grower: string;
  FarmName: string;
  FieldName: string;
  AppType: string;
  EquipID: string;
  Acres: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public apiService: ApiService
  ) {
    this.Date = "";
    this.Grower = "";
    this.FarmName = "";
    this.FieldName = "";
    this.AppType = "";
    this.EquipID = "";
    this.Acres = "";
  }

  onCreateNewJob() {

  }

  onCurrentJobReport() {

  }

  onPrevious() {
  }

  onBack() {
    this.navCtrl.pop();
  }

  onNotes() {
    this.navCtrl.push(Notes);
  }

  onSubmit() {
    let data = {
      Date: this.Date,
      Grower: this.Grower,
      FarmName: this.FarmName,
      FieldName: this.FieldName,
      AppType: this.AppType,
      EquipID: this.EquipID,
      Acres: this.Acres
    };
    this.apiService.post('/job/create', data, 'Creating Job...').subscribe(
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
