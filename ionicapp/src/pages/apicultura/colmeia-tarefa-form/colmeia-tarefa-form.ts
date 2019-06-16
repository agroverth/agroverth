import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Colmeia, ColmeiaTarefa, ColmeiaTarefaApi, ColmeiaApi } from '../../../app/shared/sdk';
import moment from 'moment';
import { TarefasBase } from '../../../app/shared/tipoTarefas.base';

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
  private permiteSalvar: boolean = true;
  public tarefaBase: TarefasBase = new TarefasBase();

  constructor(public navCtrl: NavController, public navParams: NavParams
    , public API: ColmeiaTarefaApi
    , public colmeiaApi: ColmeiaApi) {

    let item = navParams.get('item');
    if (item) {
      this.dadosDoForm = Object.assign({}, item);
      this.data = moment(this.dadosDoForm.previsao).format('YYYY-MM-DD');
      if (this.dadosDoForm.concluida) {
        this.dataConluida = moment(this.dadosDoForm.dataConclusao).format('YYYY-MM-DD');
        this.permiteSalvar = false;
      }
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
      if (!this.dadosDoForm.tipo) throw 'Selecione algum tipo';
      if (!this.dadosDoForm.quantidade) throw 'Informe alguma quantidade';
      this.dadosDoForm.previsao = moment(this.data).toDate();
      this.dadosDoForm.dataConclusao = moment(this.dataConluida).toDate();
      this.dadosDoForm.colmeiaId = this.colmeia.id;

      this.API.upsert(this.dadosDoForm).subscribe(
        (retorno: ColmeiaTarefa) => {
          if (this.dadosDoForm.concluida && this.tarefaBase.estatico(this.dadosDoForm.tipo)) {
            switch (this.dadosDoForm.tipo) {
              case 'addMelgueira': this.colmeia.quantidadeMelgueira = (this.colmeia.quantidadeMelgueira * 1) + (this.dadosDoForm.quantidade * 1); break;
              case 'delMelgueira': this.colmeia.quantidadeMelgueira = (this.colmeia.quantidadeMelgueira * 1) - (this.dadosDoForm.quantidade * 1); break;
              case 'addNinho': this.colmeia.quantidadeNinho = (this.colmeia.quantidadeNinho * 1) + (this.dadosDoForm.quantidade * 1); break;
              case 'delNinho': this.colmeia.quantidadeNinho = (this.colmeia.quantidadeNinho * 1) - (this.dadosDoForm.quantidade * 1); break;
              default: break;
            }
            if (this.colmeia.quantidadeMelgueira < 0) this.colmeia.quantidadeMelgueira = 0;
            if (this.colmeia.quantidadeNinho < 0) this.colmeia.quantidadeNinho = 0;
            this.colmeiaApi.upsert(this.colmeia).subscribe();
          }
          this.navCtrl.pop();
        }
      )
    } catch (error) {
      alert(error);
    }
  }

}
