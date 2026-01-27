export class Pickup {
  handle: number;
  constructor(handle: number) {
    this.handle = handle;
  }

  get Handle(): number {
    return this.handle;
  }

  get IsNetworked(): boolean {
    // TODO: figure out how to check this for redm
    return false
  }
}
