import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ColmeiaColheitaItens } from '../../../app/shared/sdk/models/ColmeiaColheitaItens';
import { Colmeia } from '../../../app/shared/sdk';

@IonicPage()
@Component({
  selector: 'page-colmeia-colheita-form-itens',
  templateUrl: 'colmeia-colheita-form-itens.html',
})
export class ColmeiaColheitaFormItensPage {

  public dadosDoForm: ColmeiaColheitaItens = new ColmeiaColheitaItens();
  public colmeia: Colmeia = new Colmeia();

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    let colmeia: Colmeia = navParams.get('colmeia');
    if (colmeia) {
      console.log('ColmeiaColheitaFormItensPage:colmeia', colmeia)
      this.colmeia = colmeia;
      this.dadosDoForm.colmeia = colmeia;
      this.dadosDoForm.colmeiaId = colmeia.id;
    }
    let item: ColmeiaColheitaItens = navParams.get('item');
    if (item) {
      this.dadosDoForm = item;
      this.colmeia = item.colmeia;

    }
    this.dadosDoForm.quantidadeMel = this.dadosDoForm.quantidadeMel | 0;
    this.dadosDoForm.quantidadeNectar = this.dadosDoForm.quantidadeNectar | 0;
    this.dadosDoForm.quantidadeCera = this.dadosDoForm.quantidadeCera | 0;
    this.dadosDoForm.quantidadePolen = this.dadosDoForm.quantidadePolen| 0;
    this.dadosDoForm.quantidadePropolis = this.dadosDoForm.quantidadePropolis | 0;
  }

  ionViewDidLoad() {

  }

  salvar() {
    try {
      this.viewCtrl.dismiss({ item: this.dadosDoForm });
    } catch (error) {
      alert(error);
    }
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

  calcularTotais() {

  }

}
