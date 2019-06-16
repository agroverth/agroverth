/* tslint:disable */

declare var Object: any;
export interface AbelhaEspecieInterface {
  "nome"?: string;
  "grauAgressividade"?: number;
  "eMellifera"?: boolean;
  "origem"?: string;
  "ativo"?: boolean;
  "id"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
}

export class AbelhaEspecie implements AbelhaEspecieInterface {
  "nome": string;
  "grauAgressividade": number;
  "eMellifera": boolean;
  "origem": string;
  "ativo": boolean;
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  constructor(data?: AbelhaEspecieInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AbelhaEspecie`.
   */
  public static getModelName() {
    return "AbelhaEspecie";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AbelhaEspecie for dynamic purposes.
  **/
  public static factory(data: AbelhaEspecieInterface): AbelhaEspecie{
    return new AbelhaEspecie(data);
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
      name: 'AbelhaEspecie',
      plural: 'AbelhaEspecies',
      path: 'AbelhaEspecies',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "grauAgressividade": {
          name: 'grauAgressividade',
          type: 'number'
        },
        "eMellifera": {
          name: 'eMellifera',
          type: 'boolean'
        },
        "origem": {
          name: 'origem',
          type: 'string'
        },
        "ativo": {
          name: 'ativo',
          type: 'boolean'
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
