import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ColmeiaColheita, ColmeiaColheitaApi } from '../../../app/shared/sdk';

/**
 * Generated class for the ColmeiaColheitaListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-colmeia-colheita-lista',
  templateUrl: 'colmeia-colheita-lista.html',
})
export class ColmeiaColheitaListaPage {

  public buscando: boolean = false;
  public termoBuscado: string = '';
  public lista: ColmeiaColheita[];


  constructor(public navCtrl: NavController, public navParams: NavParams, public API: ColmeiaColheitaApi) {
  }

  ionViewDidLoad() {
    // this.buscar();
  }

  ionViewDidEnter() {
    this.buscar();
  }

  buscar() {

    this.API.find({
      // where: {
      //   descricao: { like: this.termoBuscado, options: 'i' }
      // }
    }).subscribe(
      (data: ColmeiaColheita[]) => {
        this.lista = data;

      }
    )
  }

  abrir(item: ColmeiaColheita = null) {
    if (item)
      this.navCtrl.push('ColmeiaColheitaFormPage', { item: item });
    else
      this.navCtrl.push('ColmeiaColheitaFormPage');
  }


}
