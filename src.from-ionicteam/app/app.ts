import { Component } from '@angular/core';
import { Platform, ionicBootstrap } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { LandingPage } from '../../App/src/app/pages/launch/landing';

import { TRANSITION_IN_KEY, TRANSITION_OUT_KEY } from './pages/body-content-transition';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any = LandingPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp, [], {
  bodyContentEnter: TRANSITION_IN_KEY,
  bodyContentLeave: TRANSITION_OUT_KEY,
  prodMode: true
});
