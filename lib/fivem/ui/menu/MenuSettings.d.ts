import { Control } from "../../enums/Control";
export declare class MenuSettings {
    scaleWithSafezone: boolean;
    resetCursorOnOpen: boolean;
    mouseControlsEnabled: boolean;
    mouseEdgeEnabled: boolean;
    controlDisablingEnabled: boolean;
    audio: {
        library: string;
        upDown: string;
        leftRight: string;
        select: string;
        back: string;
        error: string;
    };
    enabledControls: {
        2: Control[];
        0: Control[];
    };
}
