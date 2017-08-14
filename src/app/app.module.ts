import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { IntroScreen } from '../pages/IntroScreen/IntroScreen';
import { LoginScreen } from '../pages/LoginScreen/LoginScreen';
import { LoginDoneScreen } from '../pages/LoginDoneScreen/LoginDoneScreen';
import { ApplicationLogScreen } from '../pages/ApplicationLogScreen/ApplicationLogScreen';
import { NewJob } from '../pages/ApplicationLogScreen/NewJob/NewJob';
import {CurrentJob} from "../pages/ApplicationLogScreen/CurrentJob/CurrentJob";
import {PreviousJob} from "../pages/ApplicationLogScreen/PreviousJob/PreviousJob";

@NgModule({
  declarations: [
    MyApp,
    IntroScreen,
    LoginScreen,
    LoginDoneScreen,
    ApplicationLogScreen,
    NewJob,
    CurrentJob,
    PreviousJob,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IntroScreen,
    LoginScreen,
    LoginDoneScreen,
    ApplicationLogScreen,
    NewJob,
    CurrentJob,
    PreviousJob,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
