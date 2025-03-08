import { Vector3 } from "@common/utils/Vector";

export class Pickup {
  private handle: number;

  constructor(handle: number) {
    this.handle = handle;
  }

  public get Position(): Vector3 {
    return Vector3.fromArray(GetPickupCoords(this.handle));
  }

  public get IsCollected(): boolean {
    return HasPickupBeenCollected(this.handle);
  }

  public delete(): void {
    RemovePickup(this.handle);
  }

  public exists(): boolean {
    return DoesPickupExist(this.handle);
  }
}
