import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';
import { Insomnia } from '@ionic-native/insomnia';
import { Autostart } from '@ionic-native/autostart';

@Component({
  templateUrl: 'app.html',
  providers: [AndroidFullScreen, Insomnia, Autostart]
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private AndroidFullScreen: AndroidFullScreen, private insomnia: Insomnia, private autostart: Autostart) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    this.AndroidFullScreen.isImmersiveModeSupported()
    .then(() => console.log('Immersive mode supported'))
    .catch(err => console.log(err));

    this.AndroidFullScreen.immersiveMode()
    .then(() => console.log('Immersive mode Activate'))
    .catch(err => console.log(err));

    this.insomnia.keepAwake()
    .then(
      () => console.log('success'),
      () => console.log('error'));

    this.autostart.enable();

    });
  }
}
