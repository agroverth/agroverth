import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApiarioLocalizacaoListaPage } from './apiario-localizacao-lista';

@NgModule({
  declarations: [
    ApiarioLocalizacaoListaPage,
  ],
  imports: [
    IonicPageModule.forChild(ApiarioLocalizacaoListaPage),
  ],
})
export class ApiarioLocalizacaoListaPageModule {}
