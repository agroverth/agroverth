/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Apiario } from '../../models/Apiario';
import { Colmeia } from '../../models/Colmeia';
import { ColmeiaRevisao } from '../../models/ColmeiaRevisao';
import { ColmeiaColheita } from '../../models/ColmeiaColheita';
import { Pessoa } from '../../models/Pessoa';
import { FinanceirioCategoria } from '../../models/FinanceirioCategoria';
import { Financeirio } from '../../models/Financeirio';
import { ColmeriaAnaliseFavo } from '../../models/ColmeriaAnaliseFavo';

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
    FinanceirioCategoria: FinanceirioCategoria,
    Financeirio: Financeirio,
    ColmeriaAnaliseFavo: ColmeriaAnaliseFavo,
    
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
