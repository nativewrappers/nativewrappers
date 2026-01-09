var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
class Scaleform {
  static {
    __name(this, "Scaleform");
  }
  static async render2DMasked(scaleform1, scaleform2) {
    if (!scaleform1.IsLoaded) await scaleform1.load();
    if (!scaleform2.IsLoaded) await scaleform2.load();
    if (scaleform1.IsLoaded && scaleform2.IsLoaded) {
      DrawScaleformMovieFullscreenMasked(scaleform1.Handle, scaleform2.Handle, 255, 255, 255, 255);
    }
  }
  handle;
  name;
  loaded = false;
  constructor(name) {
    this.name = name;
    this.handle = RequestScaleformMovie(this.name);
  }
  /**
   * Get the handle of the scaleform.
   */
  get Handle() {
    return this.handle;
  }
  /**
   * Get whether the handle is a valid handle.
   */
  get IsValid() {
    return this.handle !== 0;
  }
  /**
   * Get whether the scaleform is loaded.
   */
  get IsLoaded() {
    if (!this.loaded) {
      this.loaded = HasScaleformMovieLoaded(this.handle);
    }
    return this.loaded;
  }
  /**
   * Dispose the scaleform allowing the GTA engine to free memory when wanted.
   */
  dispose() {
    if (this.IsLoaded) {
      SetScaleformMovieAsNoLongerNeeded(this.handle);
      this.loaded = false;
    }
  }
  /**
   * Call a function on the scaleform.
   *
   * @param name Name of the function
   * @param args Additional arguments
   */
  callFunction(name, ...args) {
    BeginScaleformMovieMethod(this.handle, name);
    args.forEach((arg) => {
      switch (typeof arg) {
        case "number":
          PushScaleformMovieFunctionParameterInt(arg);
          break;
        case "string":
          PushScaleformMovieFunctionParameterString(arg);
          break;
        case "boolean":
          PushScaleformMovieFunctionParameterBool(arg);
          break;
        default:
          throw new Error(
            `Unknown argument type [${typeof arg}] passed to scaleform with handle [${this.handle}], had value of ${arg}`
          );
      }
    });
    EndScaleformMovieMethod();
  }
  /**
   * Calls a void method on the scaleform.
   *
   * @param name Name of the function
   */
  callVoidMethod(name) {
    CallScaleformMovieMethod(this.handle, name);
  }
  /**
   * Calls a string method on the scaleform.
   *
   * @param name Name of the function
   * @param param1
   * @param param2
   * @param param3
   * @param param4
   * @param param5
   */
  callStringMethod(name, param1 = "", param2 = "", param3 = "", param4 = "", param5 = "") {
    CallScaleformMovieMethodWithString(this.handle, name, param1, param2, param3, param4, param5);
  }
  /**
   * Calls a number method on the scaleform.
   *
   * @param name Name of the function
   * @param param1
   * @param param2
   * @param param3
   * @param param4
   * @param param5
   */
  callNumberMethod(name, param1 = -1, param2 = -1, param3 = -1, param4 = -1, param5 = -1) {
    CallScaleformMovieMethodWithNumber(this.handle, name, param1, param2, param3, param4, param5);
  }
  /**
   * Calls a number & string method on the scaleform.
   *
   * @param name Name of the function
   * @param fParam1
   * @param fParam2
   * @param fParam3
   * @param fParam4
   * @param fParam5
   * @param sParam1
   * @param sParam2
   * @param sParam3
   * @param sParam4
   * @param sParam5
   */
  callSharedMethod(name, fParam1 = -1, fParam2 = -1, fParam3 = -1, fParam4 = -1, fParam5 = -1, sParam1 = "", sParam2 = "", sParam3 = "", sParam4 = "", sParam5 = "") {
    CallScaleformMovieMethodWithNumberAndString(
      this.handle,
      name,
      fParam1,
      fParam2,
      fParam3,
      fParam4,
      fParam5,
      sParam1,
      sParam2,
      sParam3,
      sParam4,
      sParam5
    );
  }
  /**
   * Sets a duration the scaleform should be shown.
   * Useful for showing a scaleform for a known amount of time, such as messages.
   *
   * This only works for any scaleform using {@linkcode render2D};
   *
   * @param duration Duration in milliseconds
   */
  setDuration(duration) {
    if (duration <= 0) {
      return;
    }
    const start = GetGameTimer();
    const interval = setInterval(async () => {
      if (GetGameTimer() - start < duration) {
        await this.render2D();
      } else {
        clearInterval(interval);
      }
    }, 0);
  }
  async render2D() {
    if (!this.IsLoaded) await this.load();
    if (!this.IsLoaded) return;
    DrawScaleformMovieFullscreen(this.handle, 255, 255, 255, 255, 0);
  }
  async render2DScreenSpace(location, size) {
    if (this.IsLoaded) await this.load();
    if (!this.IsLoaded) return;
    const x = location.x;
    const y = location.y;
    const width = size.x;
    const height = size.y;
    DrawScaleformMovie(this.handle, x + width / 2, y + height / 2, width, height, 255, 255, 255, 255, 0);
  }
  async render3D(position, rotation, scale) {
    if (this.IsLoaded) await this.load();
    if (!this.IsLoaded) return;
    DrawScaleformMovie_3dNonAdditive(
      this.handle,
      position.x,
      position.y,
      position.z,
      rotation.x,
      rotation.y,
      rotation.z,
      2,
      2,
      1,
      scale.x,
      scale.y,
      scale.z,
      2
    );
  }
  async render3DAdditive(position, rotation, scale) {
    if (this.IsLoaded) await this.load();
    if (!this.IsLoaded) return;
    DrawScaleformMovie_3d(
      this.handle,
      position.x,
      position.y,
      position.z,
      rotation.x,
      rotation.y,
      rotation.z,
      2,
      2,
      1,
      scale.x,
      scale.y,
      scale.z,
      2
    );
  }
  load() {
    return new Promise((resolve) => {
      if (this.IsLoaded) {
        resolve(true);
      } else {
        const start = GetGameTimer();
        const interval = setInterval(() => {
          if (this.IsLoaded) {
            clearInterval(interval);
            resolve(true);
          } else if (GetGameTimer() - start > 5e3) {
            clearInterval(interval);
            console.log(`^1[fivemjs/client] Could not load scaleform ${this.name}!^7`);
            resolve(false);
          }
        }, 0);
      }
    });
  }
}
export {
  Scaleform
};
