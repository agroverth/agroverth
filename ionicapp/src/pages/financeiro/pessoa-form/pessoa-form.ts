import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pessoa, PessoaApi } from '../../../app/shared/sdk';

/**
 * Generated class for the PessoaFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pessoa-form',
  templateUrl: 'pessoa-form.html',
})
export class PessoaFormPage {
  
  public dadosDoForm: Pessoa = new Pessoa();

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public API: PessoaApi) {
      let item = navParams.get('item');      
    if (item) this.dadosDoForm = Object.assign(new Pessoa, item);
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
        (retorno: Pessoa) => {
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
