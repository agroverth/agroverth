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

  pages: Array<{title: string, icon: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // LoopBackConfig.setBaseURL('http://localhost:3000');
    LoopBackConfig.setBaseURL('https://agroverth.herokuapp.com');

    // used for an example of ngFor and navigation
    this.pages = [
<<<<<<< HEAD
      { title: 'Home', component: HomePage },
      // { title: 'Apicultura', component: null },
      { title: 'Apiario', component: 'ApiarioListaPage' },
      { title: 'Caixa', component: 'ColmeiaListaPage' },
      // { title: 'Revisão', component: 'ColmeiaRevisaoListaPage' },
      { title: 'Colheita', component: 'ColmeiaColheitaListaPage' },
      // { title: 'Financeiro', component: null },
      { title: 'Financeiro', component: 'FinanceiroListaPage' },
      { title: 'Categoria', component: 'FinanceiroCategoriaListaPage' },
      { title: 'Cliente e fornecedor', component: 'PessoaListaPage' }
      // ,
      // { title: 'AbelhaEspecie (temp)', component: 'AbelhaEspecieListaPage' }
=======
      { title: 'Início', icon: 'analytics', component: HomePage },
      // { title: 'Apicultura', icon: 'ios-archive', component: null },
      { title: 'Apiario', icon: 'grid', component: 'ApiarioListaPage' },
      { title: 'Caixa', icon: 'cube', component: 'ColmeiaListaPage' },
      // { title: 'Revisão', icon: 'ios-archive', component: 'ColmeiaRevisaoListaPage' },
      { title: 'Colheita', icon: 'md-archive', component: 'ColmeiaColheitaListaPage' },
      // { title: 'Financeiro', icon: 'ios-archive', component: null },
      { title: 'Financeiro', icon: 'logo-usd', component: 'FinanceiroListaPage' },
      { title: 'Categoria', icon: 'pricetags', component: 'FinanceiroCategoriaListaPage' },
      { title: 'Cliente e fornecedor', icon: 'ios-people', component: 'PessoaListaPage' }
>>>>>>> dd56be9183e6632c17f87ec3e9150e23af606e65
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
