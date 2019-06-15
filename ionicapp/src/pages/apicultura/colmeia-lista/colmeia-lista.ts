import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Apiario } from '../../../app/shared/sdk';

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
  public lista: Apiario[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ColmeiaListaPage');
  }

}
