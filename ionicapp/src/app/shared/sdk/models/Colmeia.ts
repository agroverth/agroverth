/* tslint:disable */
import {
  Apiario
} from '../index';

declare var Object: any;
export interface ColmeiaInterface {
  "numero"?: string;
  "nome"?: string;
  "temPropolis"?: boolean;
  "quantidadeNinho"?: number;
  "quantidadeMelgueira"?: number;
  "quantidadeOvo"?: number;
  "quantidadeLarva"?: number;
  "quantidadePupa"?: number;
  "quantidadePupaZangao"?: number;
  "quantidadePolen"?: number;
  "quantidadeNectar"?: number;
  "quantidadeMel"?: number;
  "quantidadeCera"?: number;
  "id"?: any;
  "apiarioId"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  apiario?: Apiario;
}

export class Colmeia implements ColmeiaInterface {
  "numero": string;
  "nome": string;
  "temPropolis": boolean;
  "quantidadeNinho": number;
  "quantidadeMelgueira": number;
  "quantidadeOvo": number;
  "quantidadeLarva": number;
  "quantidadePupa": number;
  "quantidadePupaZangao": number;
  "quantidadePolen": number;
  "quantidadeNectar": number;
  "quantidadeMel": number;
  "quantidadeCera": number;
  "id": any;
  "apiarioId": any;
  "createdAt": Date;
  "updatedAt": Date;
  apiario: Apiario;
  constructor(data?: ColmeiaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Colmeia`.
   */
  public static getModelName() {
    return "Colmeia";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Colmeia for dynamic purposes.
  **/
  public static factory(data: ColmeiaInterface): Colmeia{
    return new Colmeia(data);
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
      name: 'Colmeia',
      plural: 'Colmeia',
      path: 'Colmeia',
      idName: 'id',
      properties: {
        "numero": {
          name: 'numero',
          type: 'string'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "temPropolis": {
          name: 'temPropolis',
          type: 'boolean'
        },
        "quantidadeNinho": {
          name: 'quantidadeNinho',
          type: 'number'
        },
        "quantidadeMelgueira": {
          name: 'quantidadeMelgueira',
          type: 'number'
        },
        "quantidadeOvo": {
          name: 'quantidadeOvo',
          type: 'number'
        },
        "quantidadeLarva": {
          name: 'quantidadeLarva',
          type: 'number'
        },
        "quantidadePupa": {
          name: 'quantidadePupa',
          type: 'number'
        },
        "quantidadePupaZangao": {
          name: 'quantidadePupaZangao',
          type: 'number'
        },
        "quantidadePolen": {
          name: 'quantidadePolen',
          type: 'number'
        },
        "quantidadeNectar": {
          name: 'quantidadeNectar',
          type: 'number'
        },
        "quantidadeMel": {
          name: 'quantidadeMel',
          type: 'number'
        },
        "quantidadeCera": {
          name: 'quantidadeCera',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "apiarioId": {
          name: 'apiarioId',
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
        apiario: {
          name: 'apiario',
          type: 'Apiario',
          model: 'Apiario',
          relationType: 'belongsTo',
                  keyFrom: 'apiarioId',
          keyTo: 'id'
        },
      }
    }
  }
}
