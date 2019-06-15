import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Apiario, ApiarioApi } from '../../../app/shared/sdk';

/**
 * Generated class for the ApiarioListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apiario-lista',
  templateUrl: 'apiario-lista.html',
})
export class ApiarioListaPage {

  public buscando: boolean = false;
  public termoBuscado: string = '';
  public lista: Apiario[];


  constructor(public navCtrl: NavController, public navParams: NavParams, public API: ApiarioApi) {
  }

  ionViewDidLoad() {
    // this.buscar();
  }

  ionViewDidEnter() {
    this.buscar();
  }

  buscar() {

    this.API.find({
      where: {
        descricao: { like: this.termoBuscado, options: 'i' }
      }
    }).subscribe(
      (data: Apiario[]) => {
        this.lista = data;

      }
    )
  }

  abrir(item: Apiario = null) {
    if (item)
      this.navCtrl.push('ApiarioFormPage', { item: item });
    else
      this.navCtrl.push('ApiarioFormPage');
  }


}
