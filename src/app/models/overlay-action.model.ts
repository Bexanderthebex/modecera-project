import { OverlayFactoryPattern } from './overlay.model';

export const OVERLAY_ADD = '[overlay] add';
export const OVERLAY_REMOVE = '[overlay] remove';
export const OVERLAY_PROPERTIES = '[overlay] properties';

export interface OverlayAction {
    action: string;
    overlay: OverlayFactoryPattern.Overlay;
}