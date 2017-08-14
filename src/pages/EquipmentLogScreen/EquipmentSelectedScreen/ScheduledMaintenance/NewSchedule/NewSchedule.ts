import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-newschedule',
  templateUrl: 'NewSchedule.html'
})
export class NewSchedule {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {

  }

  onBack() {
    this.navCtrl.pop();
  }

  onSubmit() {
    this.navCtrl.pop();
  }
}
