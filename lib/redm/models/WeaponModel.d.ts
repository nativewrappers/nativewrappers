import { Model } from "../Model";
import type { WeaponAttachPoints } from "../enums/WeaponAttachPoints";
export declare class WeaponModel extends Model {
    requestModel(): void;
    markAsNoLongerNeeded(): void;
    get DefaultAttachPoint(): WeaponAttachPoints;
}
