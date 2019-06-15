import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoopBackConfig } from './shared/sdk';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // LoopBackConfig.setBaseURL('http://localhost:3000');
    LoopBackConfig.setBaseURL('https://agroverth.herokuapp.com');

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Apicultura', component: '' },
      { title: 'Apiario', component: 'ApiarioListaPage' },
      { title: 'Colméia', component: 'ColmeiaListaPage' },
      { title: 'Revisão', component: 'ColmeiaRevisaoListaPage' },
      { title: 'Colheita', component: 'ColmeiaColheitaListaPage' },
      { title: 'Financeiro', component: '' },
      { title: 'Financeiro', component: 'FinanceiroListaPage' },
      { title: 'Categoria', component: 'FinanceiroCategoriaListaPage' },
      { title: 'Cliente e fornecedor', component: 'PessoaListaPage' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
