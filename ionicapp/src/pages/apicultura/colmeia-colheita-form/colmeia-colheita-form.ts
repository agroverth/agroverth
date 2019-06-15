import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ColmeiaColheita, ColmeiaColheitaApi } from '../../../app/shared/sdk';
import moment from 'moment';
import { ColmeiaColheitaItens } from '../../../app/shared/sdk/models/ColmeiaColheitaItens';

/**
 * Generated class for the ColmeiaColheitaFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-colmeia-colheita-form',
  templateUrl: 'colmeia-colheita-form.html',
})
export class ColmeiaColheitaFormPage {

  public dadosDoForm: ColmeiaColheita = new ColmeiaColheita();
  public lista: ColmeiaColheitaItens[] = [];
  public data: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public API: ColmeiaColheitaApi) {
    let item = navParams.get('item');
    if (item) this.dadosDoForm = Object.assign(new ColmeiaColheita, item);
    else this.dadosDoForm.data = new Date();

    this.data = moment(this.dadosDoForm.data).format('YYYY-MM-DD');
  }

  salvar() {

    try {
      if (!this.data) throw 'Informe uma data';

      this.API.upsert(this.dadosDoForm).subscribe(
        (retorno: ColmeiaColheita) => {
          this.navCtrl.pop();
        }
      )

    } catch (error) {
      alert(error);
    }
  }


}
