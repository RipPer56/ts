import { Component, OnInit, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Config, Nav, Platform } from 'ionic-angular';
import { NavService } from './core/nav.service';

@Component({
  templateUrl: 'app.html',
})
export class BeAssurApp implements OnInit {
  @ViewChild(Nav) nav: Nav;

  constructor(private platform: Platform,
              private config: Config,
              private statusBar: StatusBar,
              private splashScreen: SplashScreen,
              private navService: NavService,) {

  }

  get sideMenuEnabled(): boolean {
    return this.nav != undefined && this.nav.getActive() != undefined && (this.nav.getActive().id !== 'auth');
  }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if (this.platform.is('ios')) {
        this.config.set('backButtonText', 'Retour');
      }
    });
    this.navService.initNav(this.nav);
  }
}
