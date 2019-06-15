import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Apiario, ApiarioApi } from '../../../app/shared/sdk';
import moment = require('moment');

/**
 * Generated class for the ApiarioFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apiario-form',
  templateUrl: 'apiario-form.html',
})
export class ApiarioFormPage {

  public dadosDoForm: Apiario = new Apiario();

  public data: string = '';


  constructor(public navCtrl: NavController, public navParams: NavParams, public API: ApiarioApi) {
    let item = navParams.get('item');
    if (item) this.dadosDoForm = Object.assign(new Apiario, item);
    else {
      this.dadosDoForm.dataCriacao = new Date();
    }
    this.data = moment(this.dadosDoForm.dataCriacao).format('YYYY-MM-DD');

  }

  ionViewDidLoad() {

  }

  salvar() {

    try {
      if (!this.dadosDoForm.nome) throw 'Informe um nome';
      if (!this.data) throw 'Informe uma data de criação';
      this.dadosDoForm.dataCriacao = moment(this.data).toDate();

      this.API.upsert(this.dadosDoForm).subscribe(
        (retorno: Apiario) => {
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
