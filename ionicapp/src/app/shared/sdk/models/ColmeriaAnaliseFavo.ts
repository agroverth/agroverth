/* tslint:disable */
import {
  Colmeia
} from '../index';

declare var Object: any;
export interface ColmeriaAnaliseFavoInterface {
  "quantidadeVazios"?: number;
  "quantidadeOvos"?: number;
  "quantidadeLarvas"?: number;
  "quantidadePupasOperarias"?: number;
  "quantidadePupasZangoes"?: number;
  "existeRealeira"?: boolean;
  "id"?: any;
  "colmeiaId"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  colmeia?: Colmeia;
}

export class ColmeriaAnaliseFavo implements ColmeriaAnaliseFavoInterface {
  "quantidadeVazios": number;
  "quantidadeOvos": number;
  "quantidadeLarvas": number;
  "quantidadePupasOperarias": number;
  "quantidadePupasZangoes": number;
  "existeRealeira": boolean;
  "id": any;
  "colmeiaId": any;
  "createdAt": Date;
  "updatedAt": Date;
  colmeia: Colmeia;
  constructor(data?: ColmeriaAnaliseFavoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ColmeriaAnaliseFavo`.
   */
  public static getModelName() {
    return "ColmeriaAnaliseFavo";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ColmeriaAnaliseFavo for dynamic purposes.
  **/
  public static factory(data: ColmeriaAnaliseFavoInterface): ColmeriaAnaliseFavo{
    return new ColmeriaAnaliseFavo(data);
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
      name: 'ColmeriaAnaliseFavo',
      plural: 'ColmeriaAnaliseFavos',
      path: 'ColmeriaAnaliseFavos',
      idName: 'id',
      properties: {
        "quantidadeVazios": {
          name: 'quantidadeVazios',
          type: 'number'
        },
        "quantidadeOvos": {
          name: 'quantidadeOvos',
          type: 'number'
        },
        "quantidadeLarvas": {
          name: 'quantidadeLarvas',
          type: 'number'
        },
        "quantidadePupasOperarias": {
          name: 'quantidadePupasOperarias',
          type: 'number'
        },
        "quantidadePupasZangoes": {
          name: 'quantidadePupasZangoes',
          type: 'number'
        },
        "existeRealeira": {
          name: 'existeRealeira',
          type: 'boolean'
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
