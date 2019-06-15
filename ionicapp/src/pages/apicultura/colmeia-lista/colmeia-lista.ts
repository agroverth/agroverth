import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Colmeia, ColmeiaApi } from '../../../app/shared/sdk';

/**
 * Generated class for the ColmeiaListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-colmeia-lista',
  templateUrl: 'colmeia-lista.html',
})
export class ColmeiaListaPage {

  public buscando: boolean = false;
  public termoBuscado: string = '';
  public lista: Colmeia[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public API: ColmeiaApi) {
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
        nome: { like: this.termoBuscado, options: 'i' }
      },
      include: 'apiario'
    }).subscribe(
      (data: Colmeia[]) => {
        this.lista = data;
      }
    )
  }

  abrir(item: Colmeia = null) {
    if (item)
      this.navCtrl.push('ColmeiaFormPage', { item: item });
    else
      this.navCtrl.push('ColmeiaFormPage');
  }

  revisao(item: Colmeia = null) {
    if (item)
      this.navCtrl.push('ColmeiaRevisaoListaPage', { item: item });
  }

}
