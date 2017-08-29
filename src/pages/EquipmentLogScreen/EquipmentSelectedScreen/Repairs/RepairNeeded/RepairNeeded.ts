import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-repairneeded',
  templateUrl: 'RepairNeeded.html'
})
export class RepairNeeded {

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
