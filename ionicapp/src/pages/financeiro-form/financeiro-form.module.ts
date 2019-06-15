import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinanceiroFormPage } from './financeiro-form';

@NgModule({
  declarations: [
    FinanceiroFormPage,
  ],
  imports: [
    IonicPageModule.forChild(FinanceiroFormPage),
  ],
})
export class FinanceiroFormPageModule {}
