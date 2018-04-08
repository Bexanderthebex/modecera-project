import * as L from "leaflet";
import * as fromDrawActionModel from './draw-action.model';

export namespace DrawFactoryPattern {
    export class Polyline {

    }

    export class DrawFactory {
        public static createDrawAction(type: string, map: L.Map): any {
            if (type == fromDrawActionModel.POLYLINE) {
                return new L.Draw.Polyline(map).enable();
            }

            return null;
        }
    }
}