/* tslint:disable */
import {
  Pessoa,
  FinanceiroCategoria
} from '../index';

declare var Object: any;
export interface FinanceiroInterface {
  "nome"?: string;
  "valor"?: number;
  "dataVencimento"?: Date;
  "dataPagamento"?: Date;
  "eTituloReceber"?: boolean;
  "eTituloQuitado"?: boolean;
  "preTitulo"?: boolean;
  "id"?: any;
  "pessoaId"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  "categoriaId"?: any;
  pessoa?: Pessoa;
  categoria?: FinanceiroCategoria;
}

export class Financeiro implements FinanceiroInterface {
  "nome": string;
  "valor": number;
  "dataVencimento": Date;
  "dataPagamento": Date;
  "eTituloReceber": boolean;
  "eTituloQuitado": boolean;
  "preTitulo": boolean;
  "id": any;
  "pessoaId": any;
  "createdAt": Date;
  "updatedAt": Date;
  "categoriaId": any;
  pessoa: Pessoa;
  categoria: FinanceiroCategoria;
  constructor(data?: FinanceiroInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Financeiro`.
   */
  public static getModelName() {
    return "Financeiro";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Financeiro for dynamic purposes.
  **/
  public static factory(data: FinanceiroInterface): Financeiro{
    return new Financeiro(data);
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
      name: 'Financeiro',
      plural: 'Financeiros',
      path: 'Financeiros',
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
        "preTitulo": {
          name: 'preTitulo',
          type: 'boolean'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "pessoaId": {
          name: 'pessoaId',
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
        "categoriaId": {
          name: 'categoriaId',
          type: 'any'
        },
      },
      relations: {
        pessoa: {
          name: 'pessoa',
          type: 'Pessoa',
          model: 'Pessoa',
          relationType: 'belongsTo',
                  keyFrom: 'pessoaId',
          keyTo: 'id'
        },
        categoria: {
          name: 'categoria',
          type: 'FinanceiroCategoria',
          model: 'FinanceiroCategoria',
          relationType: 'belongsTo',
                  keyFrom: 'categoriaId',
          keyTo: 'id'
        },
      }
    }
  }
}
