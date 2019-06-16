import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AbelhaEspecie, AbelhaEspecieApi } from '../../../app/shared/sdk';

@IonicPage()
@Component({
  selector: 'page-abelha-especie-form',
  templateUrl: 'abelha-especie-form.html',
})
export class AbelhaEspecieFormPage {

  public dadosDoForm: AbelhaEspecie = new AbelhaEspecie();

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public API: AbelhaEspecieApi) {
    let item = navParams.get('item');
    if (item) this.dadosDoForm = Object.assign(new AbelhaEspecie, item);
  }

  ionViewDidLoad() {

  }

  salvar() {

    try {
      if (!this.dadosDoForm.nome) throw 'Informe um nome';
      if (!this.dadosDoForm.id) 
      {
        this.dadosDoForm.ativo = true;
      }
      this.API.upsert(this.dadosDoForm).subscribe(
        (retorno: AbelhaEspecie) => {
          this.navCtrl.pop();
        }
      )

    } catch (error) {
      alert(error);
    }
  }

  excluir() {
  }
}
