import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Apiario, ApiarioApi, AbelhaEspecieApi, AbelhaEspecie } from '../../../app/shared/sdk';
import moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-apiario-form',
  templateUrl: 'apiario-form.html',
})
export class ApiarioFormPage {

  public dadosDoForm: Apiario = new Apiario();
  listaAbelhaEspecies: AbelhaEspecie[];

  public data: string = '';


  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public API: ApiarioApi, 
    public abelhaEspecieApi: AbelhaEspecieApi) {

    let item = navParams.get('item');
    if (item) {      
      this.dadosDoForm = Object.assign(new Apiario, item);
      this.data = moment(this.dadosDoForm.dataCriacao).format('YYYY-MM-DD');
      console.log(this.data);
    }
    else {
      this.dadosDoForm.dataCriacao = new Date();
      this.data = moment(this.dadosDoForm.dataCriacao).format('YYYY-MM-DD');
      console.log(this.data);
    }

  }

  ionViewDidLoad() {
    this.abelhaEspecieApi.find().subscribe(
      (retorno: AbelhaEspecie[]) => {
        this.listaAbelhaEspecies = retorno;        
      })

  }

  salvar() {

    try {
      if (!this.dadosDoForm.nome) throw 'Informe um nome';
      if (!this.data) throw 'Informe uma data de criação';
      this.dadosDoForm.dataCriacao = moment(this.data).toDate();

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
