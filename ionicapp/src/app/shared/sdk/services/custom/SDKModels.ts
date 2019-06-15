/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Apiario } from '../../models/Apiario';
import { Colmeia } from '../../models/Colmeia';
import { ColmeiaRevisao } from '../../models/ColmeiaRevisao';
import { ColmeiaColheita } from '../../models/ColmeiaColheita';
import { Pessoa } from '../../models/Pessoa';
import { ColmeriaAnaliseFavo } from '../../models/ColmeriaAnaliseFavo';
import { Financeiro } from '../../models/Financeiro';
import { FinanceiroCategoria } from '../../models/FinanceiroCategoria';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Apiario: Apiario,
    Colmeia: Colmeia,
    ColmeiaRevisao: ColmeiaRevisao,
    ColmeiaColheita: ColmeiaColheita,
    Pessoa: Pessoa,
    ColmeriaAnaliseFavo: ColmeriaAnaliseFavo,
    Financeiro: Financeiro,
    FinanceiroCategoria: FinanceiroCategoria,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
