import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AbelhaEspecieListaPage } from './abelha-especie-lista';

@NgModule({
  declarations: [
    AbelhaEspecieListaPage,
  ],
  imports: [
    IonicPageModule.forChild(AbelhaEspecieListaPage),
  ],
})
export class AbelhaEspecieListaPageModule {}
