import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-repairs',
  templateUrl: 'Repairs.html'
})
export class Repairs {

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
