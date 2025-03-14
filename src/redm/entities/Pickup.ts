export class Pickup {
  handle: number;
  constructor(handle: number) {
    this.handle = handle;
  }

  get Handle(): number {
    return this.handle;
  }
}
