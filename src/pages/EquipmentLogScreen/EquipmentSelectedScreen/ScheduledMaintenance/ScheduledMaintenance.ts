import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {NewSchedule} from "./NewSchedule/NewSchedule";

@Component({
  selector: 'page-scheduledmaintenance',
  templateUrl: 'ScheduledMaintenance.html'
})
export class ScheduledMaintenance {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {

  }

  onBack() {
    this.navCtrl.pop();
  }

  onNewSchedule() {
    this.navCtrl.push(NewSchedule);
  }
}
