import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-otherroutine',
  templateUrl: 'OtherRoutine.html'
})
export class OtherRoutine {

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
