import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-repairperformed',
  templateUrl: 'RepairPerformed.html'
})
export class RepairPerformed {

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
