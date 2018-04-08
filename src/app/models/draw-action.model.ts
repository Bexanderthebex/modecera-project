import * as L from 'leaflet';
import 'leaflet-draw';

export const DRAW_ADD = '[draw] add';
export const DRAW_DELETE = '[draw] delete';
export const DRAW_EDIT = '[draw] edit';


export namespace DrawActionFactoryPattern {
    export interface DrawAction {
        name: string;
        options?: L.DrawOptions.CircleMarkerOptions | L.DrawOptions.PolylineOptions |
                  L.DrawOptions.RectangleOptions | L.DrawOptions.MarkerOptions |
                  L.DrawOptions.CircleOptions | L.DrawOptions.DeleteHandlerOptions |
                  L.DrawOptions.EditHandlerOptions | L.DrawOptions.PolygonOptions;
    }

    export class DrawActionFactory {
        public static drawPolyline(drawOptions: L.DrawOptions.PolylineOptions): DrawAction {
            let action: DrawAction = {
                name: DRAW_ADD,
                options: drawOptions
            }
            return action;
        }

        public static drawRectangle(drawOptions: L.DrawOptions.RectangleOptions): DrawAction {
            let action: DrawAction = {
                name: DRAW_ADD,
                options: drawOptions
            }
            return action;
        }

        public static drawMarkerOptions(drawOptions: L.DrawOptions.MarkerOptions): DrawAction {
            let action: DrawAction = {
                name: DRAW_ADD,
                options: drawOptions
            }
            return action;
        }

        public static drawCircle(drawOptions: L.DrawOptions.CircleOptions): DrawAction {
            let action: DrawAction = {
                name: DRAW_ADD,
                options: drawOptions
            }
            return action;
        }
        public static drawPolygon(drawOptions: L.DrawOptions.PolygonOptions): DrawAction {
            let action: DrawAction = {
                name: DRAW_ADD,
                options: drawOptions
            }
            return action;
        }

        public static delete(drawOptions: L.DrawOptions.DeleteHandlerOptions): DrawAction {
            let action: DrawAction = {
                name: DRAW_DELETE,
                options: drawOptions
            }
            return action;
        }

        public static edit(drawOptions: L.DrawOptions.EditHandlerOptions): DrawAction {
            let action: DrawAction = {
                name: DRAW_EDIT,
                options: drawOptions
            }
            return action;
        }

    }
}