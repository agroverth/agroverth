import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApiarioFormPage } from './apiario-form';

@NgModule({
  declarations: [
    ApiarioFormPage,
  ],
  imports: [
    IonicPageModule.forChild(ApiarioFormPage),
  ],
})
export class ApiarioFormPageModule {}
