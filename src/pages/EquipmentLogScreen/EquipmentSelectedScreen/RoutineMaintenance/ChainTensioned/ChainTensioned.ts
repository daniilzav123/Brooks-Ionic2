import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-chaintensioned',
  templateUrl: 'ChainTensioned.html'
})
export class ChainTensioned {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {

  }

  onBack() {
    this.navCtrl.pop();
  }

  onMachineWash() {

  }
}
