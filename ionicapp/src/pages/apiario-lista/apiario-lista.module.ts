import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApiarioListaPage } from './apiario-lista';

@NgModule({
  declarations: [
    ApiarioListaPage,
  ],
  imports: [
    IonicPageModule.forChild(ApiarioListaPage),
  ],
})
export class ApiarioListaPageModule {}
