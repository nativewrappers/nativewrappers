// import { Ped, Prop, Vehicle } from "./";
// import { ClassTypes } from "../../common/utils/ClassTypes";
// import { BaseEntity } from "./BaseEntity";

// export class Entity extends BaseEntity {
// 	public static fromHandle(handle: number): Ped | Vehicle | Prop | null {
// 		switch (GetEntityType(handle)) {
// 			case 1:
// 				return new Ped(handle);
// 			case 2:
// 				return new Vehicle(handle);
// 			case 3:
// 				return new Prop(handle);
// 			default:
// 				return null;
// 		}
// 	}
//
// 	public static fromNetworkId(networkId: number): Ped | Vehicle | Prop | null {
// 		return this.fromHandle(NetworkGetEntityFromNetworkId(networkId));
// 	}
//
// 	protected type = ClassTypes.Entity;
//
// 	constructor(handle: number) {
// 		super(handle);
// 	}
// }
