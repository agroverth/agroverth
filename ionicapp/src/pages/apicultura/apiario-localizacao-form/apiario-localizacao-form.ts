import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiarioLocalizacao } from '../../../app/shared/sdk/models/ApiarioLocalizacao';
import { ApiarioLocalizacaoApi } from '../../../app/shared/sdk/services/custom/ApiarioLocalizacao';

/**
 * Generated class for the ApiarioLocalizacaoFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apiario-localizacao-form',
  templateUrl: 'apiario-localizacao-form.html',
})
export class ApiarioLocalizacaoFormPage {

  public dadosDoForm: ApiarioLocalizacao = new ApiarioLocalizacao();

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public API: ApiarioLocalizacaoApi) {
    let item = navParams.get('item');
    if (item) this.dadosDoForm = Object.assign(new ApiarioLocalizacao, item);
  }

  ionViewDidLoad() {

  }

  salvar() {

    try {
      if (!this.dadosDoForm.nome) throw 'Informe um nome';
      
      this.API.upsert(this.dadosDoForm).subscribe(
        (retorno: ApiarioLocalizacao) => {
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
