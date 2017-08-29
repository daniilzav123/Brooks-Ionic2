import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-chainoiled',
  templateUrl: 'ChainOiled.html'
})
export class ChainOiled {

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
