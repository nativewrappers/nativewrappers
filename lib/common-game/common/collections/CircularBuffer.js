var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
class CircularBuffer {
  static {
    __name(this, "CircularBuffer");
  }
  buffer;
  tail = 0;
  count = 0;
  max_size;
  constructor(max_size) {
    if (max_size <= 0) {
      throw new Error("Buffer size must be greater than 0");
    }
    this.max_size = max_size;
    this.buffer = new Array(max_size);
  }
  push(item) {
    this.buffer[this.tail] = item;
    this.tail++;
    if (this.tail >= this.max_size) {
      this.tail = 0;
    }
    if (this.count < this.max_size) {
      this.count++;
    }
  }
  pop() {
    if (this.is_empty()) {
      return void 0;
    }
    this.tail--;
    if (this.tail < 0) {
      this.tail = this.max_size - 1;
    }
    const item = this.buffer[this.tail];
    this.buffer[this.tail] = void 0;
    this.count--;
    return item;
  }
  peek() {
    if (this.is_empty()) {
      return void 0;
    }
    let peek_index = this.tail - 1;
    if (peek_index < 0) {
      peek_index = this.max_size - 1;
    }
    return this.buffer[peek_index];
  }
  *[Symbol.iterator]() {
    for (let i = 0; i < this.count; i++) {
      yield this.buffer[i];
    }
  }
  for_each(callback) {
    let i = 0;
    for (const item of this) {
      callback(item, i++);
    }
  }
  average() {
    if (this.is_empty()) {
      return 0;
    }
    let sum = 0;
    for (const item of this) {
      sum += item;
    }
    return sum / this.count;
  }
  is_empty() {
    return this.count === 0;
  }
  is_full() {
    return this.count === this.max_size;
  }
  size() {
    return this.count;
  }
  capacity() {
    return this.max_size;
  }
  clear() {
    this.buffer = new Array(this.max_size);
    this.tail = 0;
    this.count = 0;
  }
}
export {
  CircularBuffer
};
