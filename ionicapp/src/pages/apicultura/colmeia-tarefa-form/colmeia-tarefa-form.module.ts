import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ColmeiaTarefaFormPage } from './colmeia-tarefa-form';

@NgModule({
  declarations: [
    ColmeiaTarefaFormPage,
  ],
  imports: [
    IonicPageModule.forChild(ColmeiaTarefaFormPage),
  ],
})
export class ColmeiaTarefaFormPageModule {}
