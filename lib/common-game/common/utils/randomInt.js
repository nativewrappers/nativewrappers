var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
__name(randomFloat, "randomFloat");
function randomInt(min, max) {
  return Math.floor(randomFloat(min, max));
}
__name(randomInt, "randomInt");
export {
  randomFloat,
  randomInt
};
