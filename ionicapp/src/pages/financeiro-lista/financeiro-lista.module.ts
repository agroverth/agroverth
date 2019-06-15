import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinanceiroListaPage } from './financeiro-lista';

@NgModule({
  declarations: [
    FinanceiroListaPage,
  ],
  imports: [
    IonicPageModule.forChild(FinanceiroListaPage),
  ],
})
export class FinanceiroListaPageModule {}
