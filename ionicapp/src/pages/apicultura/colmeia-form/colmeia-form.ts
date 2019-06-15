import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Colmeia, Apiario, ApiarioApi, ColmeiaApi } from '../../../app/shared/sdk';
import moment from 'moment';

/**
 * Generated class for the ColmeiaFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-colmeia-form',
  templateUrl: 'colmeia-form.html',
})
export class ColmeiaFormPage {

  public dadosDoForm: Colmeia = new Colmeia();
  public listaApiario: Apiario[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, public apiarioApi: ApiarioApi, public API: ColmeiaApi) {

    this.apiarioApi.find().subscribe((listaApiario: Apiario[]) => {
      this.listaApiario = listaApiario;
    });

    let item = navParams.get('item');
    if (item) {
      this.dadosDoForm = Object.assign(new Colmeia, item);
    }
    else {
    }

    this.dadosDoForm.quantidadeOvo = this.dadosDoForm.quantidadeOvo | 0;
    this.dadosDoForm.quantidadeLarva = this.dadosDoForm.quantidadeLarva | 0;
    this.dadosDoForm.quantidadePupa = this.dadosDoForm.quantidadePupa | 0;
    this.dadosDoForm.quantidadePupaZangao = this.dadosDoForm.quantidadePupaZangao | 0;
    this.dadosDoForm.quantidadePolen = this.dadosDoForm.quantidadePolen | 0;
    this.dadosDoForm.quantidadeNectar = this.dadosDoForm.quantidadeNectar | 0;
    this.dadosDoForm.quantidadeMel = this.dadosDoForm.quantidadeMel | 0;



  }

  ionViewDidLoad() {

  }

  salvar() {

    try {
      if (!this.dadosDoForm.nome) throw 'Informe uma identificação';
      if (!this.dadosDoForm.apiarioId) throw 'Selecione um apiário';

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
