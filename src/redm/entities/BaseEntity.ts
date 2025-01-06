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

  get Handle(): number {
    return this.handle;
  }

  set Health(amount: number) {
    SetEntityHealth(this.Handle, amount, 0);
  }

  get Health(): number {
    return GetEntityHealth(this.Handle);
  }
}
