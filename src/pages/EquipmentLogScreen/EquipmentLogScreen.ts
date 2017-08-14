import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {EquipmentSelectedScreen} from "./EquipmentSelectedScreen/EquipmentSelectedScreen";

@Component({
  selector: 'page-equipmentlogscreen',
  templateUrl: 'EquipmentLogScreen.html'
})
export class EquipmentLogScreen {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {

  }

  onBack() {
    this.navCtrl.pop();
  }

  onSelect() {
    this.navCtrl.push(EquipmentSelectedScreen);
  }
}
