var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
function GetBufferAsHex(buffer) {
  const strArray = [];
  for (let i = 0; i < buffer.byteLength; i++) {
    strArray.push(buffer.getUint8(i).toString(16));
    if (i % 8 === 0) {
      strArray.push(`${i / 8 - 1}
`);
    }
  }
  return strArray.join(" ");
}
__name(GetBufferAsHex, "GetBufferAsHex");
class BufferedClass {
  static {
    __name(this, "BufferedClass");
  }
  buffer;
  view;
  constructor(bufferSize) {
    this.buffer = new ArrayBuffer(bufferSize);
    this.view = new DataView(this.buffer);
  }
}
export {
  BufferedClass,
  GetBufferAsHex
};
