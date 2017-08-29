import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-viewschedule',
  templateUrl: 'ViewSchedule.html'
})
export class ViewSchedule {

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
