import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Colmeia, ColmeiaTarefaApi, ColmeiaTarefa } from '../../../app/shared/sdk';

/**
 * Generated class for the ColmeiaTarefaListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-colmeia-tarefa-lista',
  templateUrl: 'colmeia-tarefa-lista.html',
})
export class ColmeiaTarefaListaPage {

  public colmeia: Colmeia = new Colmeia();
  public lista: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public API: ColmeiaTarefaApi) {
    let item = navParams.get('item');
    if (item) {
      this.colmeia = Object.assign(new Colmeia, item);
      this.API.find({
        where: {
          //colmeiaId: this.colmeia.id
        },
        include: { 'colmeia': 'apiario' }
      }).subscribe((lista: ColmeiaTarefa[]) => {
        this.lista = lista.filter(x => x.colmeiaId == this.colmeia.id);
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ColmeiaTarefaListaPage');
  }

  abrir(item: ColmeiaTarefa = null) {
    if (item)
      this.navCtrl.push('ColmeiaTarefaFormPage', { item: item, colmeia: this.colmeia });
    else
      this.navCtrl.push('ColmeiaTarefaFormPage', { colmeia: this.colmeia });
  }

}
