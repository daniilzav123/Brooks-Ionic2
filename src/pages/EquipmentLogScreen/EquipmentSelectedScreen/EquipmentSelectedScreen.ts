import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {LogHours} from "./LogHours/LogHours";
import {RoutineMaintenance} from "./RoutineMaintenance/RoutineMaintenance";
import {ScheduledMaintenance} from "./ScheduledMaintenance/ScheduledMaintenance";
import {Repairs} from "./Repairs/Repairs";

@Component({
  selector: 'page-equipmentselectedscreen',
  templateUrl: 'EquipmentSelectedScreen.html'
})
export class EquipmentSelectedScreen {
  public index: number;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.index = this.navParams.get("index");
  }

  onBack() {
    this.navCtrl.pop();
  }

  onLogHours() {
    this.navCtrl.push(LogHours, {
      index: this.index
    });
  }

  onRoutineMaintenance() {
    this.navCtrl.push(RoutineMaintenance);
  }

  onScheduledMaint() {
    this.navCtrl.push(ScheduledMaintenance);
  }

  onRepairs() {
    this.navCtrl.push(Repairs);
  }
}
