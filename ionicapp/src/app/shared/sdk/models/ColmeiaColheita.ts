/* tslint:disable */
import {
  Colmeia,
  ColmeiaColheitaItens
} from '../index';

declare var Object: any;
export interface ColmeiaColheitaInterface {
  "data"?: Date;
  "observacao"?: string;
  "quantidadeNinhos"?: number;
  "quantidadeMelgueiras"?: number;
  "quantidadePropolis"?: number;
  "quantidadeCera"?: number;
  "quantidadePolen"?: number;
  "quantidadeMel"?: number;
  "quantidadeNectar"?: number;
  "id"?: any;
  "colmeiaId"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  colmeia?: Colmeia;
  itens?: ColmeiaColheitaItens[];
}

export class ColmeiaColheita implements ColmeiaColheitaInterface {
  "data": Date;
  "observacao": string;
  "quantidadeNinhos": number;
  "quantidadeMelgueiras": number;
  "quantidadePropolis": number;
  "quantidadeCera": number;
  "quantidadePolen": number;
  "quantidadeMel": number;
  "quantidadeNectar": number;
  "id": any;
  "colmeiaId": any;
  "createdAt": Date;
  "updatedAt": Date;
  colmeia: Colmeia;
  itens: ColmeiaColheitaItens[];
  constructor(data?: ColmeiaColheitaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ColmeiaColheita`.
   */
  public static getModelName() {
    return "ColmeiaColheita";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ColmeiaColheita for dynamic purposes.
  **/
  public static factory(data: ColmeiaColheitaInterface): ColmeiaColheita{
    return new ColmeiaColheita(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'ColmeiaColheita',
      plural: 'ColmeiaColheita',
      path: 'ColmeiaColheita',
      idName: 'id',
      properties: {
        "data": {
          name: 'data',
          type: 'Date'
        },
        "observacao": {
          name: 'observacao',
          type: 'string'
        },
        "quantidadeNinhos": {
          name: 'quantidadeNinhos',
          type: 'number'
        },
        "quantidadeMelgueiras": {
          name: 'quantidadeMelgueiras',
          type: 'number'
        },
        "quantidadePropolis": {
          name: 'quantidadePropolis',
          type: 'number'
        },
        "quantidadeCera": {
          name: 'quantidadeCera',
          type: 'number'
        },
        "quantidadePolen": {
          name: 'quantidadePolen',
          type: 'number'
        },
        "quantidadeMel": {
          name: 'quantidadeMel',
          type: 'number'
        },
        "quantidadeNectar": {
          name: 'quantidadeNectar',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "colmeiaId": {
          name: 'colmeiaId',
          type: 'any'
        },
        "createdAt": {
          name: 'createdAt',
          type: 'Date'
        },
        "updatedAt": {
          name: 'updatedAt',
          type: 'Date'
        },
      },
      relations: {
        colmeia: {
          name: 'colmeia',
          type: 'Colmeia',
          model: 'Colmeia',
          relationType: 'belongsTo',
                  keyFrom: 'colmeiaId',
          keyTo: 'id'
        },
        itens: {
          name: 'itens',
          type: 'ColmeiaColheitaItens[]',
          model: 'ColmeiaColheitaItens',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'colmeiaColheitaId'
        },
      }
    }
  }
}
