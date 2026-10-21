var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
function generateHash(str) {
  return GetHashKey(str) & 4294967295;
}
__name(generateHash, "generateHash");
export {
  generateHash
};
