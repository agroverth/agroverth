/* tslint:disable */
import {
  Colmeia
} from '../index';

declare var Object: any;
export interface ColmeiraTemperaturaInterface {
  "temperatura"?: number;
  "data"?: Date;
  "id"?: any;
  "colmeiaId"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  colmeia?: Colmeia;
}

export class ColmeiraTemperatura implements ColmeiraTemperaturaInterface {
  "temperatura": number;
  "data": Date;
  "id": any;
  "colmeiaId": any;
  "createdAt": Date;
  "updatedAt": Date;
  colmeia: Colmeia;
  constructor(data?: ColmeiraTemperaturaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ColmeiraTemperatura`.
   */
  public static getModelName() {
    return "ColmeiraTemperatura";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ColmeiraTemperatura for dynamic purposes.
  **/
  public static factory(data: ColmeiraTemperaturaInterface): ColmeiraTemperatura{
    return new ColmeiraTemperatura(data);
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
      name: 'ColmeiraTemperatura',
      plural: 'ColmeiraTemperaturas',
      path: 'ColmeiraTemperaturas',
      idName: 'id',
      properties: {
        "temperatura": {
          name: 'temperatura',
          type: 'number'
        },
        "data": {
          name: 'data',
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
