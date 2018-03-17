import { Overlay } from './overlay.model';

export const ADD = '[overlay] add';
export const REMOVE = '[overlay] remove';

export interface OverlayAction {
    action: string;
    overlay: Overlay;
}