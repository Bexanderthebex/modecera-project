import * as L from 'leaflet';
import 'leaflet-draw';

export const DRAW_ADD = '[draw] add';
export const DRAW_DELETE = '[draw] delete';
export const DRAW_EDIT = '[draw] edit';
export const CIRCLEMARKER = '[draw_type] circlemarker';
export const POLYLINE = '[draw_type] polyline';
export const RECTANGLE = '[draw_type] rectangle';
export const MARKER = '[draw_type] marker';
export const CIRCLE = '[draw_type] circle';
export const POLYGON = '[draw_type] polygon'

export interface DrawAction {
    name: string;
    type: string;
    options?: L.DrawOptions.CircleMarkerOptions | L.DrawOptions.PolylineOptions |
                L.DrawOptions.RectangleOptions | L.DrawOptions.MarkerOptions |
                L.DrawOptions.CircleOptions | L.DrawOptions.DeleteHandlerOptions |
                L.DrawOptions.EditHandlerOptions | L.DrawOptions.PolygonOptions;
}