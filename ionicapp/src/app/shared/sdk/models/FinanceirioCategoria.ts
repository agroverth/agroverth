/* tslint:disable */

declare var Object: any;
export interface FinanceirioCategoriaInterface {
  "nome"?: string;
  "ativo"?: boolean;
  "id"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
}

export class FinanceirioCategoria implements FinanceirioCategoriaInterface {
  "nome": string;
  "ativo": boolean;
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  constructor(data?: FinanceirioCategoriaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `FinanceirioCategoria`.
   */
  public static getModelName() {
    return "FinanceirioCategoria";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of FinanceirioCategoria for dynamic purposes.
  **/
  public static factory(data: FinanceirioCategoriaInterface): FinanceirioCategoria{
    return new FinanceirioCategoria(data);
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
      name: 'FinanceirioCategoria',
      plural: 'FinanceirioCategoria',
      path: 'FinanceirioCategoria',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "ativo": {
          name: 'ativo',
          type: 'boolean',
          default: true
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
