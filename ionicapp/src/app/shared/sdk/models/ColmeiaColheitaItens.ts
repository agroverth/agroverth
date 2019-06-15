/* tslint:disable */
import {
  ColmeiaColheita
} from '../index';

declare var Object: any;
export interface ColmeiaColheitaItensInterface {
  "quantidadePropolis"?: number;
  "quantidadeCera"?: number;
  "quantidadePolen"?: number;
  "quantidadeMel"?: number;
  "id"?: any;
  "colheitaId"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  colheita?: ColmeiaColheita;
}

export class ColmeiaColheitaItens implements ColmeiaColheitaItensInterface {
  "quantidadePropolis": number;
  "quantidadeCera": number;
  "quantidadePolen": number;
  "quantidadeMel": number;
  "id": any;
  "colheitaId": any;
  "createdAt": Date;
  "updatedAt": Date;
  colheita: ColmeiaColheita;
  constructor(data?: ColmeiaColheitaItensInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ColmeiaColheitaItens`.
   */
  public static getModelName() {
    return "ColmeiaColheitaItens";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ColmeiaColheitaItens for dynamic purposes.
  **/
  public static factory(data: ColmeiaColheitaItensInterface): ColmeiaColheitaItens{
    return new ColmeiaColheitaItens(data);
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
      name: 'ColmeiaColheitaItens',
      plural: 'ColmeiaColheitaItens',
      path: 'ColmeiaColheitaItens',
      idName: 'id',
      properties: {
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
        "id": {
          name: 'id',
          type: 'any'
        },
        "colheitaId": {
          name: 'colheitaId',
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
        colheita: {
          name: 'colheita',
          type: 'ColmeiaColheita',
          model: 'ColmeiaColheita',
          relationType: 'belongsTo',
                  keyFrom: 'colheitaId',
          keyTo: 'id'
        },
      }
    }
  }
}
