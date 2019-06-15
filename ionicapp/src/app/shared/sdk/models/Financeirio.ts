/* tslint:disable */
import {
  FinanceirioCategoria,
  Pessoa
} from '../index';

declare var Object: any;
export interface FinanceirioInterface {
  "nome"?: string;
  "valor"?: number;
  "dataVencimento"?: Date;
  "dataPagamento"?: Date;
  "eTituloReceber"?: boolean;
  "eTituloQuitado"?: boolean;
  "id"?: number;
  "categoriaId"?: number;
  "pessoaId"?: number;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  categoria?: FinanceirioCategoria;
  pessoa?: Pessoa;
}

export class Financeirio implements FinanceirioInterface {
  "nome": string;
  "valor": number;
  "dataVencimento": Date;
  "dataPagamento": Date;
  "eTituloReceber": boolean;
  "eTituloQuitado": boolean;
  "id": number;
  "categoriaId": number;
  "pessoaId": number;
  "createdAt": Date;
  "updatedAt": Date;
  categoria: FinanceirioCategoria;
  pessoa: Pessoa;
  constructor(data?: FinanceirioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Financeirio`.
   */
  public static getModelName() {
    return "Financeirio";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Financeirio for dynamic purposes.
  **/
  public static factory(data: FinanceirioInterface): Financeirio{
    return new Financeirio(data);
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
      name: 'Financeirio',
      plural: 'Financeirios',
      path: 'Financeirios',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "valor": {
          name: 'valor',
          type: 'number'
        },
        "dataVencimento": {
          name: 'dataVencimento',
          type: 'Date'
        },
        "dataPagamento": {
          name: 'dataPagamento',
          type: 'Date'
        },
        "eTituloReceber": {
          name: 'eTituloReceber',
          type: 'boolean'
        },
        "eTituloQuitado": {
          name: 'eTituloQuitado',
          type: 'boolean'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "categoriaId": {
          name: 'categoriaId',
          type: 'number'
        },
        "pessoaId": {
          name: 'pessoaId',
          type: 'number'
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
        categoria: {
          name: 'categoria',
          type: 'FinanceirioCategoria',
          model: 'FinanceirioCategoria',
          relationType: 'belongsTo',
                  keyFrom: 'categoriaId',
          keyTo: 'id'
        },
        pessoa: {
          name: 'pessoa',
          type: 'Pessoa',
          model: 'Pessoa',
          relationType: 'belongsTo',
                  keyFrom: 'pessoaId',
          keyTo: 'id'
        },
      }
    }
  }
}
