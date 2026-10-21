var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Color } from "../common/utils/Color";
import { Point } from "../utils/Point";
import { Size } from "../utils/Size";
import { Screen } from "./Screen";
class Sprite {
  static {
    __name(this, "Sprite");
  }
  textureName;
  pos;
  size;
  heading;
  color;
  visible;
  _textureDict;
  constructor(textureDict, textureName, pos, size, heading = 0, color = Color.White) {
    this._textureDict = textureDict;
    this.textureName = textureName;
    this.pos = pos || new Point();
    this.size = size || new Size();
    this.heading = heading || 0;
    this.color = color || Color.White;
    this.visible = true;
  }
  loadTextureDictionary() {
    RequestStreamedTextureDict(this._textureDict, true);
    const interval = setInterval(() => {
      if (this.IsTextureDictionaryLoaded) {
        clearInterval(interval);
      }
    }, 0);
  }
  set TextureDict(v) {
    this._textureDict = v;
    if (!this.IsTextureDictionaryLoaded) {
      this.loadTextureDictionary();
    }
  }
  get TextureDict() {
    return this._textureDict;
  }
  get IsTextureDictionaryLoaded() {
    return HasStreamedTextureDictLoaded(this._textureDict);
  }
  draw(arg1, textureName, pos, size, heading, color, loadTexture = true, resolution) {
    const textureDictionary = arg1 && typeof arg1 === "string" ? arg1 : this.TextureDict;
    textureName = textureName || this.textureName;
    pos = pos || this.pos;
    size = size || this.size;
    heading = heading || this.heading;
    color = color || this.color;
    if (loadTexture) {
      if (!HasStreamedTextureDictLoaded(textureDictionary)) {
        RequestStreamedTextureDict(textureDictionary, false);
      }
    }
    resolution = arg1 instanceof Size ? arg1 : resolution;
    resolution = resolution || new Size(Screen.ScaledWidth, Screen.Height);
    const w = size.width / resolution.width;
    const h = size.height / resolution.height;
    const x = pos.X / resolution.width + w * 0.5;
    const y = pos.Y / resolution.height + h * 0.5;
    DrawSprite(textureDictionary, textureName, x, y, w, h, heading, color.r, color.g, color.b, color.a);
  }
}
export {
  Sprite
};
