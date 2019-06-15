import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PessoaListaPage } from './pessoa-lista';

@NgModule({
  declarations: [
    PessoaListaPage,
  ],
  imports: [
    IonicPageModule.forChild(PessoaListaPage),
  ],
})
export class PessoaListaPageModule {}
