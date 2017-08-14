import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-previousjob',
  templateUrl: 'PreviousJob.html'
})
export class PreviousJob {

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
