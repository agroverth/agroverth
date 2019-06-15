import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Financeiro, FinanceiroApi } from '../../../app/shared/sdk';

@IonicPage()
@Component({
  selector: 'page-financeiro-lista',
  templateUrl: 'financeiro-lista.html',
})
export class FinanceiroListaPage {

  public buscando: boolean = false;
  public termoBuscado: string = '';
  public lista: Financeiro[];

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
      public API: FinanceiroApi) {
  }

  ionViewDidLoad() {
  }

  ionViewDidEnter() {
    this.buscar();
  }

  buscar() {

    this.API.find({
      where: {
        nome: { like: this.termoBuscado, options: 'i' }
      }
    }).subscribe(
      (data: Financeiro[]) => {
        this.lista = data;
      }
    )
  }

  abrir(item: Financeiro = null) {
    if (item)
      this.navCtrl.push('FinanceiroFormPage', { item: item });
    else
      this.navCtrl.push('FinanceiroFormPage');
  }
}