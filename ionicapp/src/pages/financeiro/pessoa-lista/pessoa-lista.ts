import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pessoa, PessoaApi } from '../../../app/shared/sdk';

/**
 * Generated class for the PessoaListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pessoa-lista',
  templateUrl: 'pessoa-lista.html',
})
export class PessoaListaPage {

  public buscando: boolean = false;
  public termoBuscado: string = '';
  public lista: Pessoa[];

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
      public API: PessoaApi) {
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
      (data: Pessoa[]) => {
        this.lista = data;
      }
    )
  }

  abrir(item: Pessoa = null) {
    console.log(item);
    
    if (item)
      this.navCtrl.push('PessoaFormPage', { item: item });
    else
      this.navCtrl.push('PessoaFormPage');
  }
}
