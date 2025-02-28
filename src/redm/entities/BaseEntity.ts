import { Vector3 } from "@common/utils";

export class BaseEntity {
  private handle: number;
  constructor(entHandle: number) {
    this.handle = entHandle;
  }

  // Replaces the current handle for the entity used on, this hsould be used sparringly, mainly
  // in situations where you're going to reuse an entity over and over and don't want to make a
  // new entity every time.
  //
  // **WARNING**: This does no checks, if you provide it an invalid entity it will use it
  //
  // ```ts
  // const REUSABLE_ENTITY = new Entity(entityHandle);
  //
  // onNet("entityHandler", (entNetId: number) => {
  //  // if no net entity we should ignore
  //  if (!NetworkDoesEntityExistWithNetworkId(entNetId)) return;
  //
  //  // Reuse our entity so we don't have to initialize a new one
  //  REUSABLE_ENTITY.replaceHandle(NetworkGetEntityFromNetworkId(entNetId));
  //  // Do something with REUSABLE_ENTITY entity
  // })
  // ```
  replaceHandle(newHandle: number) {
    this.handle = newHandle;
  }

  /**
   * @returns Returns true if the entity handle is not 0 and exists in the game engine
   */
  get Exists(): boolean {
    return this.handle !== 0 && DoesEntityExist(this.Handle);
  }

  get Handle(): number {
    return this.handle;
  }

  set Health(amount: number) {
    SetEntityHealth(this.Handle, amount, 0);
  }

  get Health(): number {
    return GetEntityHealth(this.Handle);
  }

  get Heading(): number {
    return GetEntityHeading(this.Handle);
  }

  set Heading(heading: number) {
    SetEntityHeading(this.Handle, heading);
  }

  get Position(): Vector3 {
    return Vector3.fromArray(GetEntityCoords(this.handle, true, true));
  }

  set Position(pos: Vector3) {
    SetEntityCoords(
      this.handle,
      pos.x,
      pos.y,
      pos.z,
      false,
      false,
      false,
      false,
    );
  }
}
