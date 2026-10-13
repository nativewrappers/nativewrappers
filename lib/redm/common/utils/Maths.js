var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
class Maths {
  static {
    __name(this, "Maths");
  }
  static clamp(num, min, max) {
    return num <= min ? min : num >= max ? max : num;
  }
  static getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
export {
  Maths
};
