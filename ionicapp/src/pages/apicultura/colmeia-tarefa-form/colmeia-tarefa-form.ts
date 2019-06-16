import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Colmeia, ColmeiaTarefa, ColmeiaTarefaApi, ColmeiaApi } from '../../../app/shared/sdk';
import moment from 'moment';

/**
 * Generated class for the ColmeiaTarefaFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-colmeia-tarefa-form',
  templateUrl: 'colmeia-tarefa-form.html',
})
export class ColmeiaTarefaFormPage {

  public dadosDoForm: ColmeiaTarefa = new ColmeiaTarefa();
  public colmeia: Colmeia = new Colmeia();
  public data: string = '';
  public dataConluida: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams
    , public API: ColmeiaTarefaApi
    , public colmeiaApi: ColmeiaApi) {

    let item = navParams.get('item');
    if (item) {
      this.dadosDoForm = item;
      this.data = moment(this.dadosDoForm.previsao).format('YYYY-MM-DD');
      if (this.dadosDoForm.concluida)
        this.dataConluida = moment(this.dadosDoForm.dataConclusao).format('YYYY-MM-DD');
      else
        this.dataConluida = moment().format('YYYY-MM-DD');
    } else {
      this.dadosDoForm.previsao = moment().add(15, 'days').toDate();
      this.data = moment(this.dadosDoForm.previsao).format('YYYY-MM-DD');
      this.dataConluida = moment().format('YYYY-MM-DD');
    }
    let colmeia = navParams.get('colmeia');
    if (colmeia) this.colmeia = colmeia;
  }

  ionViewDidLoad() {

  }

  salvar() {
    try {
      if (!this.data) throw 'Informe uma data de criação';
      this.dadosDoForm.previsao = moment(this.data).toDate();
      this.dadosDoForm.dataConclusao = moment(this.dataConluida).toDate();
      this.dadosDoForm.colmeiaId = this.colmeia.id;

      this.API.upsert(this.dadosDoForm).subscribe(
        (retorno: ColmeiaTarefa) => {
          this.colmeiaApi.upsert(this.colmeia).subscribe()
          this.navCtrl.pop();
        }
      )
    } catch (error) {
      alert(error);
    }
  }

}
