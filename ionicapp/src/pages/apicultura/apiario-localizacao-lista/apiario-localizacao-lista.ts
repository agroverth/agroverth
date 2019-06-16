import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiarioLocalizacao } from '../../../app/shared/sdk/models/ApiarioLocalizacao';
import { ApiarioLocalizacaoApi } from '../../../app/shared/sdk/services/custom/ApiarioLocalizacao';

/**
 * Generated class for the ApiarioLocalizacaoListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apiario-localizacao-lista',
  templateUrl: 'apiario-localizacao-lista.html',
})
export class ApiarioLocalizacaoListaPage {

  public buscando: boolean = false;
  public termoBuscado: string = '';
  public lista: ApiarioLocalizacao[];

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
      public API: ApiarioLocalizacaoApi) {
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
      (data: ApiarioLocalizacao[]) => {
        this.lista = data;
      }
    )
  }

  abrir(item: ApiarioLocalizacao = null) {
    if (item)
      this.navCtrl.push('ApiarioLocalizacaoFormPage', { item: item });
    else
      this.navCtrl.push('ApiarioLocalizacaoFormPage');
  }
}