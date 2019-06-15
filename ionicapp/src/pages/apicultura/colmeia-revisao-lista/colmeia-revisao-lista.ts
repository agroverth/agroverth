import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Colmeia, ColmeiaRevisao, ColmeiaRevisaoApi } from '../../../app/shared/sdk';

/**
 * Generated class for the ColmeiaRevisaoListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-colmeia-revisao-lista',
  templateUrl: 'colmeia-revisao-lista.html',
})
export class ColmeiaRevisaoListaPage {

  public colmeia: Colmeia = new Colmeia();
  public lista: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public API: ColmeiaRevisaoApi) {

    let item = navParams.get('item');
    if (item) {
      this.colmeia = Object.assign(new Colmeia, item);
      this.API.find({
        where: {
          colmeiaId: this.colmeia.id
        },
        include: { 'colmeia': 'apiario' }
      }).subscribe(lista => {
        this.lista = lista;
      });
    }
  }

  abrir(item: ColmeiaRevisao = null) {
    if (item)
      this.navCtrl.push('ColmeiaRevisaoFormPage', { item: item, colmeia: this.colmeia });
    else
      this.navCtrl.push('ColmeiaRevisaoFormPage', { colmeia: this.colmeia });
  }



}
