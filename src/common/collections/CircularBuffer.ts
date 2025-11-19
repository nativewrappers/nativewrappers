/*
 * A circular buffer that
 */
export class CircularBuffer<T> {
  private buffer: (T | undefined)[];
  private tail = 0;
  private count = 0;
  private max_size: number;

  constructor(max_size: number) {
    if (max_size <= 0) {
      throw new Error("Buffer size must be greater than 0");
    }
    this.max_size = max_size;
    this.buffer = new Array(max_size);
  }

  push(item: T): void {
    this.buffer[this.tail] = item;
    this.tail++;

    if (this.tail >= this.max_size) {
      this.tail = 0;
    }

    if (this.count < this.max_size) {
      this.count++;
    }
  }

  pop(): T | undefined {
    if (this.is_empty()) {
      return undefined;
    }

    this.tail--;
    if (this.tail < 0) {
      this.tail = this.max_size - 1;
    }

    const item = this.buffer[this.tail];
    this.buffer[this.tail] = undefined;
    this.count--;
    return item;
  }

  peek(): T | undefined {
    if (this.is_empty()) {
      return undefined;
    }

    let peek_index = this.tail - 1;
    if (peek_index < 0) {
      peek_index = this.max_size - 1;
    }

    return this.buffer[peek_index];
  }

  *[Symbol.iterator](): Iterator<T> {
    for (let i = 0; i < this.count; i++) {
      yield this.buffer[i]!;
    }
  }

  for_each(callback: (item: T, index: number) => void): void {
    let i = 0;
    for (const item of this) {
      callback(item, i++);
    }
  }

  average(this: CircularBuffer<number>): number {
    if (this.is_empty()) {
      return 0;
    }

    let sum = 0;
    for (const item of this) {
      sum += item;
    }

    return sum / this.count;
  }

  is_empty(): boolean {
    return this.count === 0;
  }

  is_full(): boolean {
    return this.count === this.max_size;
  }

  size(): number {
    return this.count;
  }

  capacity(): number {
    return this.max_size;
  }

  clear(): void {
    this.buffer = new Array(this.max_size);
    this.tail = 0;
    this.count = 0;
  }
}
