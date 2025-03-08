import { ClassTypes } from "@common/utils/ClassTypes";
import { BaseEntity } from "./BaseEntity";

export class Prop extends BaseEntity {
  public static exists(prop: Prop): boolean {
    return typeof prop !== "undefined" && prop.exists();
  }

  public static fromHandle(handle: number): Prop | null {
    return new Prop(handle);
  }

  public static fromNetworkId(networkId: number): Prop | null {
    if (!NetworkDoesEntityExistWithNetworkId(networkId)) {
      return null;
    }

    return new Prop(NetworkGetEntityFromNetworkId(networkId));
  }
  protected type = ClassTypes.Prop;

  constructor(handle: number) {
    super(handle);
  }

  public exists(): boolean {
    return super.exists() && GetEntityType(this.handle) === 3;
  }

  public placeOnGround(): void {
    PlaceObjectOnGroundProperly(this.handle);
  }
}
