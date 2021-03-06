/* tslint:disable */
import {
  Colmeia,
  ApiarioLocalizacao
} from '../index';

declare var Object: any;
export interface ApiarioInterface {
  "nome"?: string;
  "especie"?: string;
  "ativo"?: boolean;
  "dataCriacao"?: Date;
  "id"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  "localizacaoId"?: any;
  colmeias?: Colmeia[];
  localizacao?: ApiarioLocalizacao;
}

export class Apiario implements ApiarioInterface {
  "nome": string;
  "especie": string;
  "ativo": boolean;
  "dataCriacao": Date;
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  "localizacaoId": any;
  colmeias: Colmeia[];
  localizacao: ApiarioLocalizacao;
  constructor(data?: ApiarioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Apiario`.
   */
  public static getModelName() {
    return "Apiario";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Apiario for dynamic purposes.
  **/
  public static factory(data: ApiarioInterface): Apiario{
    return new Apiario(data);
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
      name: 'Apiario',
      plural: 'Apiarios',
      path: 'Apiarios',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "especie": {
          name: 'especie',
          type: 'string'
        },
        "ativo": {
          name: 'ativo',
          type: 'boolean'
        },
        "dataCriacao": {
          name: 'dataCriacao',
          type: 'Date'
        },
        "id": {
          name: 'id',
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
        "localizacaoId": {
          name: 'localizacaoId',
          type: 'any'
        },
      },
      relations: {
        colmeias: {
          name: 'colmeias',
          type: 'Colmeia[]',
          model: 'Colmeia',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'apiarioId'
        },
        localizacao: {
          name: 'localizacao',
          type: 'ApiarioLocalizacao',
          model: 'ApiarioLocalizacao',
          relationType: 'belongsTo',
                  keyFrom: 'localizacaoId',
          keyTo: 'id'
        },
      }
    }
  }
}
