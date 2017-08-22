import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {ApiService} from "../../../services/apiService";

@Component({
  selector: 'page-currentjob',
  templateUrl: 'CurrentJob.html'
})
export class CurrentJob {
  public job_list = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public apiService: ApiService
  ) {

  }

  onCreateNewJob() {

  }

  onCurrentJobReport() {

  }

  onPrevious() {
  }

  onJob(index: any) {
    alert(index);
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

  onBack() {
    this.navCtrl.pop();
  }

}
