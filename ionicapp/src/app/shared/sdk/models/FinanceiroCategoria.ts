/* tslint:disable */

declare var Object: any;
export interface FinanceiroCategoriaInterface {
  "nome"?: string;
  "ativo"?: boolean;
  "id"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
}

export class FinanceiroCategoria implements FinanceiroCategoriaInterface {
  "nome": string;
  "ativo": boolean;
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  constructor(data?: FinanceiroCategoriaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `FinanceiroCategoria`.
   */
  public static getModelName() {
    return "FinanceiroCategoria";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of FinanceiroCategoria for dynamic purposes.
  **/
  public static factory(data: FinanceiroCategoriaInterface): FinanceiroCategoria{
    return new FinanceiroCategoria(data);
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
      name: 'FinanceiroCategoria',
      plural: 'FinanceiroCategoria',
      path: 'FinanceiroCategoria',
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
