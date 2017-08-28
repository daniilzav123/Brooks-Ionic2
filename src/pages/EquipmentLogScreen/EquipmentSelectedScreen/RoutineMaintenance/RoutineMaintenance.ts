import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {MachineWash} from "./MachineWash/MachineWash";
import {Grease} from "./Grease/Grease";
import {OtherRoutine} from "./OtherRoutine/OtherRoutine";

@Component({
  selector: 'page-routinemaintenance',
  templateUrl: 'RoutineMaintenance.html'
})
export class RoutineMaintenance {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {

  }

  onBack() {
    this.navCtrl.pop();
  }

  onMachineWash() {
    this.navCtrl.push(MachineWash);
  }

  onGrease() {
    this.navCtrl.push(Grease);
  }

  onOtherRoutine() {
    this.navCtrl.push(OtherRoutine);
  }
}
