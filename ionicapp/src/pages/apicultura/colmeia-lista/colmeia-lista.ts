import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Colmeia, ColmeiaApi } from '../../../app/shared/sdk';

@IonicPage()
@Component({
  selector: 'page-colmeia-lista',
  templateUrl: 'colmeia-lista.html',
})
export class ColmeiaListaPage {

  public buscando: boolean = false;
  public selecao: boolean = false;
  public termoBuscado: string = '';
  public lista: Colmeia[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public API: ColmeiaApi, public viewCtrl: ViewController) {
    let selecao = this.navParams.get('selecao');
    this.selecao = !(!selecao);
  }

  ionViewDidLoad() {
    // this.buscar();
  }

  ionViewDidEnter() {
    this.buscar();
  }

  buscar() {
    this.API.find({
      where: {
        nome: { like: this.termoBuscado, options: 'i' }
      },
      include: 'apiario'
    }).subscribe(
      (data: Colmeia[]) => {
        this.lista = data;
      }
    )
  }

  abrir(item: Colmeia = null) {
    if (this.selecao) {
      this.viewCtrl.dismiss({ item: item });
    }
    else {
      if (item) {
        this.navCtrl.push('ColmeiaFormPage', { item: item });
      }
      else this.navCtrl.push('ColmeiaFormPage');
    }
  }

  revisao(item: Colmeia = null, ev: any) {
    ev.stopPropagation();
    if (item) this.navCtrl.push('ColmeiaRevisaoListaPage', { item: item });
  }

  tarefa(item: Colmeia = null, ev: any) {
    ev.stopPropagation();
    if (item) this.navCtrl.push('ColmeiaTarefaListaPage', { item: item });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
