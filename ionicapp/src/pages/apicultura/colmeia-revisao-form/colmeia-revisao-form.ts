import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ColmeiaRevisao, Colmeia, ColmeiaRevisaoApi, ColmeiaApi } from '../../../app/shared/sdk';
import moment from 'moment';


@IonicPage()
@Component({
  selector: 'page-colmeia-revisao-form',
  templateUrl: 'colmeia-revisao-form.html',
})
export class ColmeiaRevisaoFormPage {

  public dadosDoForm: ColmeiaRevisao = new ColmeiaRevisao();
  public colmeia: Colmeia = new Colmeia();

  public data: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams
    , public API: ColmeiaRevisaoApi
    , public colmeiaApi: ColmeiaApi
  ) {
    let item = navParams.get('item');
    if (item) {
      this.dadosDoForm = item;
      this.data = moment(this.dadosDoForm.data).format('YYYY-MM-DD');
    } else {
      this.dadosDoForm.quantidadeOvo = this.colmeia.quantidadeOvo | 0;
      this.dadosDoForm.quantidadeLarva = this.colmeia.quantidadeLarva | 0;
      this.dadosDoForm.quantidadePupa = this.colmeia.quantidadePupa | 0;
      this.dadosDoForm.quantidadePupaZangao = this.colmeia.quantidadePupaZangao | 0;
      this.dadosDoForm.quantidadePolen = this.colmeia.quantidadePolen | 0;
      this.dadosDoForm.quantidadeNectar = this.colmeia.quantidadeNectar | 0;
      this.dadosDoForm.quantidadeMel = this.colmeia.quantidadeMel | 0;
      this.dadosDoForm.data = new Date();
      this.data = moment().format('YYYY-MM-DD');
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

  calcularTotais() {

  }

  salvar() {
    try {
      if (!this.data) throw 'Informe uma data de criação';
      this.dadosDoForm.data = moment(this.data).toDate();
      this.dadosDoForm.colmeiaId = this.colmeia.id;

      this.API.upsert(this.dadosDoForm).subscribe(
        (retorno: ColmeiaRevisao) => {
          this.colmeia.quantidadeOvo = this.dadosDoForm.quantidadeOvo;
          this.colmeia.quantidadeLarva = this.dadosDoForm.quantidadeLarva;
          this.colmeia.quantidadePupa = this.dadosDoForm.quantidadePupa;
          this.colmeia.quantidadePupaZangao = this.dadosDoForm.quantidadePupaZangao;
          this.colmeia.quantidadePolen = this.dadosDoForm.quantidadePolen;
          this.colmeia.quantidadeNectar = this.dadosDoForm.quantidadeNectar;
          this.colmeia.quantidadeMel = this.dadosDoForm.quantidadeMel;
          this.colmeiaApi.upsert(this.colmeia).subscribe()
          this.navCtrl.pop();
        }
      )
    } catch (error) {
      alert(error);
    }
  }

}
