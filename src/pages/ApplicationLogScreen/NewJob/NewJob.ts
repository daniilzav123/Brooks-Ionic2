import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

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

}
