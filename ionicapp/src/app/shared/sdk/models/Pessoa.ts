/* tslint:disable */

declare var Object: any;
export interface PessoaInterface {
  "nome"?: string;
  "telefone"?: string;
  "email"?: string;
  "cargo"?: string;
  "eCliente"?: boolean;
  "eFornecedor"?: boolean;
  "ativo"?: boolean;
  "id"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
}

export class Pessoa implements PessoaInterface {
  "nome": string;
  "telefone": string;
  "email": string;
  "cargo": string;
  "eCliente": boolean;
  "eFornecedor": boolean;
  "ativo": boolean;
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  constructor(data?: PessoaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Pessoa`.
   */
  public static getModelName() {
    return "Pessoa";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Pessoa for dynamic purposes.
  **/
  public static factory(data: PessoaInterface): Pessoa{
    return new Pessoa(data);
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
      name: 'Pessoa',
      plural: 'Pessoas',
      path: 'Pessoas',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "telefone": {
          name: 'telefone',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "cargo": {
          name: 'cargo',
          type: 'string'
        },
        "eCliente": {
          name: 'eCliente',
          type: 'boolean'
        },
        "eFornecedor": {
          name: 'eFornecedor',
          type: 'boolean'
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
