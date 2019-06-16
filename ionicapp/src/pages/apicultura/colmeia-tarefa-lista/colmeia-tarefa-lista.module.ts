import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ColmeiaTarefaListaPage } from './colmeia-tarefa-lista';

@NgModule({
  declarations: [
    ColmeiaTarefaListaPage,
  ],
  imports: [
    IonicPageModule.forChild(ColmeiaTarefaListaPage),
  ],
})
export class ColmeiaTarefaListaPageModule {}
