import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-taskreminder',
  templateUrl: 'TaskReminder.html'
})
export class TaskReminder {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {

  }

  onBack() {
    this.navCtrl.pop();
  }

}
