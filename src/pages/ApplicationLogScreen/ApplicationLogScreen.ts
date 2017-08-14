import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { NewJob } from "./NewJob/NewJob";
import {CurrentJob} from "./CurrentJob/CurrentJob";
import {PreviousJob} from "./PreviousJob/PreviousJob";

@Component({
  selector: 'page-applicationlogscreen',
  templateUrl: 'ApplicationLogScreen.html'
})
export class ApplicationLogScreen {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {

  }

  onCreateNewJob() {
    this.navCtrl.push(NewJob);
  }

  onCurrentJobReport() {
    this.navCtrl.push(CurrentJob);
  }

  onPrevious() {
    this.navCtrl.push(PreviousJob);
  }

  onBack() {
    this.navCtrl.pop();
  }

}
