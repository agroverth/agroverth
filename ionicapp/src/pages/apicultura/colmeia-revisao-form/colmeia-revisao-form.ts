import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-colmeia-revisao-form',
  templateUrl: 'colmeia-revisao-form.html',
})
export class ColmeiaRevisaoFormPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ColmeiaRevisaoFormPage');
  }

}
