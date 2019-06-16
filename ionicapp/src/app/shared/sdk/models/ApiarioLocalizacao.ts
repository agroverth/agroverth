/* tslint:disable */

declare var Object: any;
export interface ApiarioLocalizacaoInterface {
  "nome"?: string;
  "mesInicioProducao"?: number;
  "mesFimProducao"?: number;
  "tipoVegetacao"?: string;
  "id"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
}

export class ApiarioLocalizacao implements ApiarioLocalizacaoInterface {
  "nome": string;
  "mesInicioProducao": number;
  "mesFimProducao": number;
  "tipoVegetacao": string;
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  constructor(data?: ApiarioLocalizacaoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ApiarioLocalizacao`.
   */
  public static getModelName() {
    return "ApiarioLocalizacao";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ApiarioLocalizacao for dynamic purposes.
  **/
  public static factory(data: ApiarioLocalizacaoInterface): ApiarioLocalizacao{
    return new ApiarioLocalizacao(data);
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
      name: 'ApiarioLocalizacao',
      plural: 'ApiarioLocalizacaos',
      path: 'ApiarioLocalizacaos',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "mesInicioProducao": {
          name: 'mesInicioProducao',
          type: 'number'
        },
        "mesFimProducao": {
          name: 'mesFimProducao',
          type: 'number'
        },
        "tipoVegetacao": {
          name: 'tipoVegetacao',
          type: 'string'
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
      },
      relations: {
      }
    }
  }
}
