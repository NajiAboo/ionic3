import { SettingsPage } from './../pages/settings/settings';
import { Component, ViewChild } from '@angular/core';
import { Platform, Tabs, MenuController, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = TabsPage;
  tabsPage = TabsPage;
  settingsPage = SettingsPage;
  @ViewChild('nav') view: NavController;

  constructor(platform: Platform
            , statusBar: StatusBar
            , splashScreen: SplashScreen
            , private menuController: MenuController
             ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page:any) {
    console.log('tab clicked', page);
    this.view.setRoot(page);
    this.menuController.close();
  }
}

