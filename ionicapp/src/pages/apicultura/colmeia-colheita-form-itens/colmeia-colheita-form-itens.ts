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
      this.colmeia = colmeia;
      this.dadosDoForm.colmeia = colmeia;
      this.dadosDoForm.colmeiaId = colmeia.id;
    }
    let item: ColmeiaColheitaItens = navParams.get('item');
    if (item) {
      this.dadosDoForm = item;
      this.colmeia = item.colmeia;
    }
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

}
