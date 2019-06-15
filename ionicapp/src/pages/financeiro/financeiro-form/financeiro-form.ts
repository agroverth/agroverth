import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Financeiro, FinanceiroApi, FinanceiroCategoria, FinanceiroCategoriaApi } from '../../../app/shared/sdk';

@IonicPage()
@Component({
  selector: 'page-financeiro-form',
  templateUrl: 'financeiro-form.html',
})
export class FinanceiroFormPage {

  public dadosDoForm: Financeiro = new Financeiro();
  listaCategorias: FinanceiroCategoria[];
  
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public API: FinanceiroApi,
     public categoriaApi: FinanceiroCategoriaApi) {
    let item = navParams.get('item');
    if (item) this.dadosDoForm = Object.assign(new Financeiro, item);
  }

  ionViewDidLoad() {
    this.categoriaApi.find().subscribe(
      (retorno: FinanceiroCategoria[]) => {
        this.listaCategorias = retorno;        
      })
  }

  salvar() {

    try {
      if (!this.dadosDoForm.nome) throw 'Informe uma descrição';

      this.API.upsert(this.dadosDoForm).subscribe(
        (retorno: Financeiro) => {
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