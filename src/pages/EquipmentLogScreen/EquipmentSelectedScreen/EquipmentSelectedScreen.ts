import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {LogHours} from "./LogHours/LogHours";
import {RoutineMaintenance} from "./RoutineMaintenance/RoutineMaintenance";
import {ScheduledMaintenance} from "./ScheduledMaintenance/ScheduledMaintenance";

@Component({
  selector: 'page-equipmentselectedscreen',
  templateUrl: 'EquipmentSelectedScreen.html'
})
export class EquipmentSelectedScreen {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {

  }

  onBack() {
    this.navCtrl.pop();
  }

  onLogHours() {
    this.navCtrl.push(LogHours);
  }

  onRoutineMaintenance() {
    this.navCtrl.push(RoutineMaintenance);
  }

  onScheduledMaint() {
    this.navCtrl.push(ScheduledMaintenance);
  }
}
