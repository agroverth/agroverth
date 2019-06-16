import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AbelhaEspecie, AbelhaEspecieApi } from '../../../app/shared/sdk';

@IonicPage()
@Component({
  selector: 'page-abelha-especie-lista',
  templateUrl: 'abelha-especie-lista.html',
})
export class AbelhaEspecieListaPage {

  public buscando: boolean = false;
  public termoBuscado: string = '';
  public lista: AbelhaEspecie[];

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
      public API: AbelhaEspecieApi) {
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
      (data: AbelhaEspecie[]) => {
        this.lista = data;
      }
    )
  }

  abrir(item: AbelhaEspecie = null) {
    if (item)
      this.navCtrl.push('AbelhaEspecieFormPage', { item: item });
    else
      this.navCtrl.push('AbelhaEspecieFormPage');
  }
}