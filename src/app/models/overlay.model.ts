import * as L from "leaflet";

export namespace OverlayFactoryPattern {
    export interface Overlay {
        id: string;
        name: string;
        type: string;
        link: string;
        data?: L.GeoJSON;
    }

    export class GeoJSONOverlay {
        create = (data: any) => {
            return L.geoJSON(data,
                {
                    style: function(feature) {
                        return {color: feature.properties.stroke}
                    }
                }
            );
        }        
    }

    export class DataFactory {
        public static createOverlay(type: string): any {
            if (type == 'L.GeoJSON') {
                return new GeoJSONOverlay();
            }

            return null;
        }
    }
}

