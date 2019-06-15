import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ColmeiaListaPage } from './colmeia-lista';

@NgModule({
  declarations: [
    ColmeiaListaPage,
  ],
  imports: [
    IonicPageModule.forChild(ColmeiaListaPage),
  ],
})
export class ColmeiaListaPageModule {}
