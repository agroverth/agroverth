import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Colmeia, ColmeiaRevisao, ColmeiaRevisaoApi } from '../../../app/shared/sdk';
// import bson from 'bson';

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
    let item = this.navParams.get('item');
    if (item) {
      this.colmeia = Object.assign(new Colmeia, item);
    }
  }

  ionViewDidEnter() {
    this.buscar();
  }

  buscar() {
    if (this.colmeia) {
      this.API.find({
        where: {
          //colmeiaId: this.colmeia.id
        },
        include: { 'colmeia': 'apiario' }
      }).subscribe((lista: ColmeiaRevisao[]) => {
        this.lista = lista.filter(x => x.colmeiaId == this.colmeia.id);
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
