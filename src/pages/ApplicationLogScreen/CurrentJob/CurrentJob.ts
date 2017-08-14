import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-currentjob',
  templateUrl: 'CurrentJob.html'
})
export class CurrentJob {

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
