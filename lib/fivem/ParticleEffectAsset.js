var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Vector3 } from "./common/utils/Vector";
import { InvertAxisFlags } from "./enums/InvertAxis";
class ParticleEffectAsset {
  static {
    __name(this, "ParticleEffectAsset");
  }
  /**
   * Returns the name of the asset. Same as AssetName.
   */
  get Asset() {
    return this.assetName;
  }
  assetName;
  constructor(assetName) {
    this.assetName = assetName;
  }
  /**
   * Get the name of the particle effect.
   */
  get AssetName() {
    return this.assetName;
  }
  /**
   * Get whether the particle effect has loaded into game memory.
   */
  get IsLoaded() {
    return HasNamedPtfxAssetLoaded(this.assetName);
  }
  /**
   * Start a particle effect at a world position.
   *
   * @param effectName Name of effect.
   * @param rot Rotation from entity position.
   * @param scale Size of the effect.
   * @param invertAxis Which axis to invert (default none).
   */
  startNonLoopedAtCoord(effectName, pos, rot = new Vector3(0, 0, 0), scale = 1, invertAxis = { flags: InvertAxisFlags.None }) {
    if (!this.setNextCall()) {
      return false;
    }
    const invertAxisFlags = invertAxis.flags;
    SetPtfxAssetNextCall(this.assetName);
    return StartParticleFxLoopedAtCoord(
      effectName,
      pos.x,
      pos.y,
      pos.z,
      rot.x,
      rot.y,
      rot.z,
      scale,
      !!(invertAxisFlags & InvertAxisFlags.X),
      !!(invertAxisFlags & InvertAxisFlags.Y),
      !!(invertAxisFlags & InvertAxisFlags.Z),
      false
    ) > 0;
  }
  /**
   * Start a particle effect on an entity
   *
   * @param effectName Name of effect.
   * @param entity Entity to use effect on.
   * @param off Offset from entity position.
   * @param rot Rotation from entity position.
   * @param scale Size of the effect.
   * @param invertAxis Which axis to invert (default none).
   */
  startNonLoopedOnEntity(effectName, entity, off = new Vector3(0, 0, 0), rot = new Vector3(0, 0, 0), scale = 1, invertAxis = { flags: InvertAxisFlags.None }) {
    if (!this.setNextCall()) {
      return false;
    }
    const invertAxisFlags = invertAxis.flags;
    SetPtfxAssetNextCall(this.assetName);
    return !!StartParticleFxLoopedOnEntity(
      effectName,
      entity.Handle,
      off.x,
      off.y,
      off.z,
      rot.x,
      rot.y,
      rot.z,
      scale,
      !!(invertAxisFlags & InvertAxisFlags.X),
      !!(invertAxisFlags & InvertAxisFlags.Y),
      !!(invertAxisFlags & InvertAxisFlags.Z)
    );
  }
  /**
   * Load a particle effect into the game memory.
   *
   * @param timeout Max time to load Particle Effect
   */
  request(timeout) {
    return new Promise((resolve) => {
      if (!this.IsLoaded) {
        RequestNamedPtfxAsset(this.assetName);
        const start = GetGameTimer();
        const interval = setInterval(() => {
          if (this.IsLoaded || GetGameTimer() - start >= timeout) {
            clearInterval(interval);
            resolve(this.IsLoaded);
          }
        }, 0);
      } else {
        resolve(this.IsLoaded);
      }
    });
  }
  /**
   * Allow game engine to safely unload particle effect model from memory.
   */
  markAsNoLongerNeeded() {
    RemoveNamedPtfxAsset(this.assetName);
  }
  toString() {
    return this.assetName;
  }
  setNextCall() {
    if (!this.IsLoaded) {
      RequestNamedPtfxAsset(this.assetName);
    } else {
      SetPtfxAssetNextCall(this.assetName);
      return true;
    }
    return false;
  }
}
export {
  ParticleEffectAsset
};
