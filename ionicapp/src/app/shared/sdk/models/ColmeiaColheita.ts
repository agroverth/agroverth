/* tslint:disable */
import {
  Colmeia
} from '../index';

declare var Object: any;
export interface ColmeiaColheitaInterface {
  "data"?: Date;
  "quantidadeNinhos"?: number;
  "quantidadeMelgueiras"?: number;
  "quantidadePropolis"?: number;
  "quantidadeCera"?: number;
  "quantidadePolen"?: number;
  "id"?: any;
  "colmeiaId"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  colmeia?: Colmeia;
}

export class ColmeiaColheita implements ColmeiaColheitaInterface {
  "data": Date;
  "quantidadeNinhos": number;
  "quantidadeMelgueiras": number;
  "quantidadePropolis": number;
  "quantidadeCera": number;
  "quantidadePolen": number;
  "id": any;
  "colmeiaId": any;
  "createdAt": Date;
  "updatedAt": Date;
  colmeia: Colmeia;
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
      }
    }
  }
}
