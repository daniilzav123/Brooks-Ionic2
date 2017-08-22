import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {Notes} from "./Notes/Notes";
import {ApiService} from "../../../services/apiService";
import {SingletonService} from "../../../services/singletoneService";

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
  note: string;
  imageUrl = null;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public apiService: ApiService,
    public singletonService: SingletonService
  ) {
    this.Date = "";
    this.Grower = "";
    this.FarmName = "";
    this.FieldName = "";
    this.AppType = "";
    this.EquipID = "";
    this.Acres = "";
    this.note = "";
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
    this.navCtrl.push(Notes, { parent: this });
  }

  setNotes(str) {
    this.note = str;
  }

  onSubmit() {
    let data = {
      User: this.singletonService.loginUser,
      Date: this.Date,
      Grower: this.Grower,
      FarmName: this.FarmName,
      FieldName: this.FieldName,
      AppType: this.AppType,
      EquipID: this.EquipID,
      Acres: this.Acres,
      note: this.note,
      imageUrl: ""
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
