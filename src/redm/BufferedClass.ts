export function GetBufferAsHex(buffer: DataView) {
  const strArray = [];
  for (let i = 0; i < buffer.byteLength; i++) {
    strArray.push(buffer.getUint8(i).toString(16));
    if (i % 8 === 0) {
      strArray.push(`${i / 8 - 1}\n`);
    }
  }

  return strArray.join(" ");
}

export abstract class BufferedClass {
  buffer: ArrayBuffer;
  view: DataView;
  constructor(bufferSize: number) {
    this.buffer = new ArrayBuffer(bufferSize);
    this.view = new DataView(this.buffer);
  }
}
