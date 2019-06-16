import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiarioApi, ColmeiaApi, ColmeiaTarefaApi, Apiario } from '../../app/shared/sdk';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public totalApiario: number = 0;
  public totalCaixas: number = 0;
  public totalMelgueira: number = 0;
  public totalNinho: number = 0;
  public totalMel: number = 0;
  public totalTarefasPendentes: number = 0;

  constructor(public navCtrl: NavController,
    public apiarioApi: ApiarioApi,
    public tarefaApi: ColmeiaTarefaApi,
  ) {

    this.apiarioApi.find({
      include: 'colmeias'
    }).subscribe((arpiarios => {
      this.totalApiario = arpiarios.length;
      arpiarios.forEach((a: Apiario) => {
        this.totalCaixas += a.colmeias.length;
        a.colmeias.forEach(caixa => {
          this.totalMelgueira += caixa.quantidadeMelgueira;
          this.totalMel += caixa.quantidadeMel;
          this.totalNinho += caixa.quantidadeNinho;
        });
      });
    }));

    // this.tarefaApi.count({ where: { concluida: false } }).subscribe(t => this.totalTarefasPendentes);

    // this.tarefaApi.count({or: [{concluida: false},{concluida: undefined}]  }).subscribe(t => this.totalTarefasPendentes = t.count);
    this.tarefaApi.count({ concluida: { neq: true } }).subscribe(t => this.totalTarefasPendentes = t.count);

  }

}
