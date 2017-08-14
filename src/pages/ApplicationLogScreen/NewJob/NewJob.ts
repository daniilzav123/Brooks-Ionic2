import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {Notes} from "./Notes/Notes";

@Component({
  selector: 'page-newjob',
  templateUrl: 'NewJob.html'
})
export class NewJob {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {

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
    this.navCtrl.pop();
  }
}
