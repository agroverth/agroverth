import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ColmeiaColheita, ColmeiaColheitaApi, Colmeia, ColmeiaColheitaItensApi, ColmeiaApi } from '../../../app/shared/sdk';
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

  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public modalCtrl: ModalController
    , public API: ColmeiaColheitaApi
    , public colmeiaApi: ColmeiaApi
    , public colmeiaColheitaItensApi: ColmeiaColheitaItensApi) {
    let item = navParams.get('item');
    if (item) {
      this.dadosDoForm = Object.assign(new ColmeiaColheita, item);
      this.lista = this.dadosDoForm.itens;      
    }
    else this.dadosDoForm.data = new Date();

    this.data = moment(this.dadosDoForm.data).format('YYYY-MM-DD');
  }

  salvar() {

    try {
      if (!this.data) throw 'Informe uma data';
      if (!this.lista) throw 'Adicione pelo umenos uma box';

      this.API.upsert(this.dadosDoForm).subscribe(
        (retorno: ColmeiaColheita) => {

          this.lista.forEach(item => {
            item.colheitaId = retorno.id;
            this.colmeiaColheitaItensApi.upsert(item).subscribe();
            this.colmeiaApi.findOne({ where: { id: item.colmeiaId } }).subscribe((colmeia: any) => {
              colmeia.quantidadeMel -= item.quantidadeMel | 0;
              colmeia.quantidadeNectar -= item.quantidadeNectar | 0;
              colmeia.quantidadeCera -= item.quantidadeCera | 0;
              colmeia.quantidadePolen -= item.quantidadePolen | 0;
              colmeia.quantidadePropolis -= item.quantidadePropolis | 0;

              if (colmeia.quantidadeMel < 0) colmeia.quantidadeMel = 0;
              if (colmeia.quantidadeNectar < 0) colmeia.quantidadeNectar = 0;
              if (colmeia.quantidadeCera < 0) colmeia.quantidadeCera = 0;
              if (colmeia.quantidadePolen < 0) colmeia.quantidadePolen = 0;
              if (colmeia.quantidadePropolis < 0) colmeia.quantidadePropolis = 0;
              this.colmeiaApi.upsert(colmeia).subscribe();
            })
          });

          // this.navCtrl.pop();
        }
      )

    } catch (error) {
      alert(error);
    }
  }

  addCaixa() {
    let modal = this.modalCtrl.create('ColmeiaListaPage', { selecao: true });
    modal.onDidDismiss((data) => {
      console.log('addCaixa:onDidDismiss', data);

      if (data && data.item) {
        if (this.lista.find(x => x.colmeiaId == data.item.id)) {
          alert('Caixa já adicionada');
        }
        else {

          let modal = this.modalCtrl.create('ColmeiaColheitaFormItensPage', { colmeia: data.item });
          modal.onDidDismiss(item => {
            if (item)
              this.lista.push(item.item);
            console.log('lista', this.lista);
          });
          modal.present();
        }
      }

    });
    modal.present();
  }

  editarItem(item: ColmeiaColheitaItens) {
    let modal = this.modalCtrl.create('ColmeiaColheitaFormItensPage', { item: item });
    modal.onDidDismiss(data => {
      console.log('editarItem:onDidDismiss', data);
    });
    modal.present();
  }


}
