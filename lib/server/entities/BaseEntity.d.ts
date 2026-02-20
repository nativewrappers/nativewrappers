import { ClassTypes } from "../common/utils/ClassTypes";
import type { eEntityType } from "../enum/eEntityType";
import type { PopulationType } from "../enum/PopulationType";
import type { Hash } from "../type/Hash";
import type { OrphanMode } from "../enum/OrphanMode";
import { Vector3, Vector4 } from "../common/utils/Vector";
export declare class BaseEntity {
    protected handle: number;
    protected type: ClassTypes;
    constructor(handle: number);
    replaceHandle(newHandle: number): void;
    static fromNetworkId(networkId: number): BaseEntity | null;
    static fromStateBagName(stateBagName: string): BaseEntity | null;
    get State(): StateBagInterface;
    get Handle(): number;
    get Owner(): number;
    get FirstOwner(): number;
    get Exists(): boolean;
    /**
     * @returns the entity that the calling entity is attached to, or null if
     * there is none
     */
    get AttachedTo(): BaseEntity | null;
    get Position(): Vector3;
    /**
     * This is an RPC native, meaning that it can fail to work.
     */
    set Position(pos: Vector3);
    get Heading(): number;
    get PositionAndHeading(): Vector4;
    get Health(): number;
    get MaxHealth(): number;
    get Model(): Hash;
    get PopulationType(): PopulationType;
    get Rotation(): Vector3;
    get RotationVelocity(): Vector3;
    get RoutingBucket(): number;
    /**
     * @returns The script that made the entity
     */
    get Script(): string;
    get Speed(): number;
    get Type(): eEntityType;
    /**
     * @returns the entitys velocity, if the entity is a ped it will return Vector3(0, 0, 0)
     */
    get Velocity(): Vector3;
    get IsVisible(): boolean;
    get NetworkId(): number;
    get IsNoLongerNeeded(): boolean;
    get OrphanMode(): OrphanMode;
    set OrphanMode(orphanMode: OrphanMode);
    delete(): void;
}
