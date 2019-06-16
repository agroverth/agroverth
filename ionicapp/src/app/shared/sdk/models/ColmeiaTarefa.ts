/* tslint:disable */
import {
  Colmeia
} from '../index';

declare var Object: any;
export interface ColmeiaTarefaInterface {
  "previsao"?: Date;
  "tipo"?: string;
  "quantidade"?: number;
  "concluida"?: boolean;
  "dataConclusao"?: Date;
  "id"?: any;
  "colmeiaId"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  colmeia?: Colmeia;
}

export class ColmeiaTarefa implements ColmeiaTarefaInterface {
  "previsao": Date;
  "tipo": string;
  "quantidade": number;
  "concluida": boolean;
  "dataConclusao": Date;
  "id": any;
  "colmeiaId": any;
  "createdAt": Date;
  "updatedAt": Date;
  colmeia: Colmeia;
  constructor(data?: ColmeiaTarefaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ColmeiaTarefa`.
   */
  public static getModelName() {
    return "ColmeiaTarefa";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ColmeiaTarefa for dynamic purposes.
  **/
  public static factory(data: ColmeiaTarefaInterface): ColmeiaTarefa{
    return new ColmeiaTarefa(data);
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
      name: 'ColmeiaTarefa',
      plural: 'ColmeiaTarefas',
      path: 'ColmeiaTarefas',
      idName: 'id',
      properties: {
        "previsao": {
          name: 'previsao',
          type: 'Date'
        },
        "tipo": {
          name: 'tipo',
          type: 'string'
        },
        "quantidade": {
          name: 'quantidade',
          type: 'number'
        },
        "concluida": {
          name: 'concluida',
          type: 'boolean'
        },
        "dataConclusao": {
          name: 'dataConclusao',
          type: 'Date'
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
