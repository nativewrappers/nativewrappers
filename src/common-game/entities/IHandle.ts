// Simple class that has a handle, used to implement default features in a sharable way
// Mainly implemented for bones
export class IHandle {
  protected handle: number;
  constructor(handle: number) {
    this.handle = handle;
  }

  exists(): boolean {
    return DoesEntityExist(this.handle);
  }

  get Handle(): number {
    return this.handle;
  }
}
