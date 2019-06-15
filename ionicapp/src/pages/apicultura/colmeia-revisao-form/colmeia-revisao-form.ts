import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ColmeiaRevisao, Colmeia } from '../../../app/shared/sdk';


@IonicPage()
@Component({
  selector: 'page-colmeia-revisao-form',
  templateUrl: 'colmeia-revisao-form.html',
})
export class ColmeiaRevisaoFormPage {

  public dadosDoForm: ColmeiaRevisao | any = new ColmeiaRevisao();
  public colmeia: Colmeia = new Colmeia();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let item = navParams.get('item');
    if (item) {
      this.dadosDoForm = item;
    } else {
      this.dadosDoForm.quantidadeOvo = 0;
      this.dadosDoForm.quantidadeLarva = 0;
      this.dadosDoForm.quantidadePupa = 0;
      this.dadosDoForm.quantidadePupaZangao = 0;
      this.dadosDoForm.quantidadePolen = 0;
      this.dadosDoForm.quantidadeNectar = 0;
      this.dadosDoForm.quantidadeMel = 0;
    }
    let colmeia = navParams.get('colmeia');
    if (colmeia) this.colmeia = colmeia;
  }

  addUm(variavel: string) {
    if (!this.dadosDoForm[variavel]) this.dadosDoForm[variavel] = 0;
    this.dadosDoForm[variavel] += 1;
    console.log('addUm', this.dadosDoForm[variavel]);
  }

  subUm(variavel: string) {
    if (!this.dadosDoForm[variavel]) this.dadosDoForm[variavel] = 1;
    this.dadosDoForm[variavel] -= 1;
  }

}
