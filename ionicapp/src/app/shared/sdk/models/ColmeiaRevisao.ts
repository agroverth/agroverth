/* tslint:disable */
import {
  Colmeia
} from '../index';

declare var Object: any;
export interface ColmeiaRevisaoInterface {
  "data"?: Date;
  "temperaturaInterna"?: number;
  "temperaturaExterna"?: number;
  "humidadeInterna"?: number;
  "humidadeExterna"?: number;
  "predadores"?: boolean;
  "predadoresDescricao"?: string;
  "ocorrencias"?: boolean;
  "ocorrenciasDescricao"?: string;
  "quantidadeNinho"?: number;
  "quantidadeMelgueira"?: number;
  "quantiadeTampasTrocadas"?: number;
  "quantiadeQuadrosTrocados"?: number;
  "quantiadeTelaNinhoTrocadas"?: number;
  "quantiadeTelaMelgueiraTrocadas"?: number;
  "quantiadeQuadroPropolisTrocados"?: number;
  "id"?: any;
  "colmeiaId"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  colmeia?: Colmeia;
}

export class ColmeiaRevisao implements ColmeiaRevisaoInterface {
  "data": Date;
  "temperaturaInterna": number;
  "temperaturaExterna": number;
  "humidadeInterna": number;
  "humidadeExterna": number;
  "predadores": boolean;
  "predadoresDescricao": string;
  "ocorrencias": boolean;
  "ocorrenciasDescricao": string;
  "quantidadeNinho": number;
  "quantidadeMelgueira": number;
  "quantiadeTampasTrocadas": number;
  "quantiadeQuadrosTrocados": number;
  "quantiadeTelaNinhoTrocadas": number;
  "quantiadeTelaMelgueiraTrocadas": number;
  "quantiadeQuadroPropolisTrocados": number;
  "id": any;
  "colmeiaId": any;
  "createdAt": Date;
  "updatedAt": Date;
  colmeia: Colmeia;
  constructor(data?: ColmeiaRevisaoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ColmeiaRevisao`.
   */
  public static getModelName() {
    return "ColmeiaRevisao";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ColmeiaRevisao for dynamic purposes.
  **/
  public static factory(data: ColmeiaRevisaoInterface): ColmeiaRevisao{
    return new ColmeiaRevisao(data);
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
      name: 'ColmeiaRevisao',
      plural: 'ColmeiaRevisaos',
      path: 'ColmeiaRevisaos',
      idName: 'id',
      properties: {
        "data": {
          name: 'data',
          type: 'Date'
        },
        "temperaturaInterna": {
          name: 'temperaturaInterna',
          type: 'number'
        },
        "temperaturaExterna": {
          name: 'temperaturaExterna',
          type: 'number'
        },
        "humidadeInterna": {
          name: 'humidadeInterna',
          type: 'number'
        },
        "humidadeExterna": {
          name: 'humidadeExterna',
          type: 'number'
        },
        "predadores": {
          name: 'predadores',
          type: 'boolean'
        },
        "predadoresDescricao": {
          name: 'predadoresDescricao',
          type: 'string'
        },
        "ocorrencias": {
          name: 'ocorrencias',
          type: 'boolean'
        },
        "ocorrenciasDescricao": {
          name: 'ocorrenciasDescricao',
          type: 'string'
        },
        "quantidadeNinho": {
          name: 'quantidadeNinho',
          type: 'number'
        },
        "quantidadeMelgueira": {
          name: 'quantidadeMelgueira',
          type: 'number'
        },
        "quantiadeTampasTrocadas": {
          name: 'quantiadeTampasTrocadas',
          type: 'number'
        },
        "quantiadeQuadrosTrocados": {
          name: 'quantiadeQuadrosTrocados',
          type: 'number'
        },
        "quantiadeTelaNinhoTrocadas": {
          name: 'quantiadeTelaNinhoTrocadas',
          type: 'number'
        },
        "quantiadeTelaMelgueiraTrocadas": {
          name: 'quantiadeTelaMelgueiraTrocadas',
          type: 'number'
        },
        "quantiadeQuadroPropolisTrocados": {
          name: 'quantiadeQuadroPropolisTrocados',
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
