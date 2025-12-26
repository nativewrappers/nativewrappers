var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Color } from "./common/utils/Color";
import { Vector3 } from "./common/utils/Vector";
import { InvertAxisFlags } from "./enums/InvertAxis";
class ParticleEffect {
  static {
    __name(this, "ParticleEffect");
  }
  asset;
  effectName;
  offset = new Vector3(0, 0, 0);
  rotation = new Vector3(0, 0, 0);
  color = Color.Transparent;
  scale = 1;
  range = 1;
  invertAxis = { flags: InvertAxisFlags.None };
  handle;
  /**
   * Creates a particle effect.
   *
   * @param asset Particle effect asset.
   * @param effectName Name of effect.
   */
  constructor(asset, effectName) {
    this.handle = -1;
    this.asset = asset;
    this.effectName = effectName;
  }
  /**
   * Get the particle effect handle.
   */
  get Handle() {
    return this.handle;
  }
  /**
   * Get whether particle effect is currently active.
   */
  get IsActive() {
    return this.Handle !== -1 && DoesParticleFxLoopedExist(this.Handle);
  }
  /**
   * Stop a particle effect.
   */
  stop() {
    if (this.IsActive) {
      RemoveParticleFx(this.Handle, false);
    }
    this.handle = -1;
  }
  /**
   * Get the rotation of the particle effect.
   */
  get Rotation() {
    return this.rotation;
  }
  /**
   * Set the rotation of the particle effect.
   */
  set Rotation(rotation) {
    this.rotation = rotation;
    if (this.IsActive) {
      const off = this.offset;
      SetParticleFxLoopedOffsets(this.Handle, off.x, off.y, off.z, rotation.x, rotation.y, rotation.z);
    }
  }
  /**
   * Get the range of the particle effect.
   */
  get Range() {
    return this.range;
  }
  /**
   * Set the range of the particle effect.
   */
  set Range(range) {
    this.range = range;
    SetParticleFxLoopedRange(this.Handle, range);
  }
  /**
   * Get the invert axis flag of the particle effect.
   */
  get InvertAxis() {
    return this.invertAxis;
  }
  /**
   * Set the inverted axis of the particle effect.
   */
  set InvertAxis(invertAxis) {
    this.invertAxis = invertAxis;
    if (this.IsActive) {
      this.stop();
      this.start();
    }
  }
  /**
   * Set a paramaeter of a particle effect.
   *
   * @param parameterName Name of parameter.
   * @param value Value of parameter.
   */
  setParameter(parameterName, value) {
    if (this.IsActive) {
      SetParticleFxLoopedEvolution(this.Handle, parameterName, value, false);
    }
  }
  /**
   * Get the name of the particle effect asset. Same as ParticleEffect.AssetName.
   */
  get AssetName() {
    return this.asset.AssetName;
  }
  /**
   * Get the name of the particle effect.
   */
  get EffectName() {
    return this.effectName;
  }
  /**
   * Return the particle effect as string. `AssetName`\\`EffectName`.
   */
  toString() {
    return `${this.AssetName}\\${this.EffectName}`;
  }
}
export {
  ParticleEffect
};
