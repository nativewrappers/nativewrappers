export enum State {
  Uninitialized = 0,
  Initialized = 0x1,
  Enabled = 0x2,
}

type AbstractWrapper<T> = {
  // The cookie that will be used to remove the state bag listener, event listener,
  // ConVar listener, etc.
  cookie: T;
  state: State;
};

/*
 * biome-ignore lint/complexity/noBannedTypes: We don't know how the structure
 * of the function
 */
type FunctionWrapper = AbstractWrapper<Function>;
type CookieWrapper = AbstractWrapper<number>;

export class BaseScript {
  private state = State.Uninitialized;

  private events: Map<string, FunctionWrapper[]> = new Map();
  private exports: Map<string, FunctionWrapper[]> = new Map();
  private ticks: Map<string, FunctionWrapper[]> = new Map();
  private statebags: Map<string, CookieWrapper[]> = new Map();
  private convars: Map<string, CookieWrapper[]> = new Map();
  // TODO:
  // Commands?

  get IsEnabled() {
    return (this.state & State.Enabled) !== 0;
  }

  start() {}

  stop() {}

  startTick(name: string) {}

  stopTick(name: string) {}
}
