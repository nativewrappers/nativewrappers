var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
class Point {
  static {
    __name(this, "Point");
  }
  static parse(arg) {
    let point = new Point();
    if (arg) {
      if (typeof arg === "object") {
        if (Array.isArray(arg)) {
          if (arg.length === 2) {
            point = new Point(arg[0], arg[1]);
          }
        } else if (arg.X && arg.Y) {
          point = new Point(arg.X, arg.Y);
        }
      } else {
        if (arg.indexOf(",") !== -1) {
          const arr = arg.split(",");
          point = new Point(Number.parseFloat(arr[0]), Number.parseFloat(arr[1]));
        }
      }
    }
    return point;
  }
  X;
  Y;
  constructor(x = 0, y = 0) {
    this.X = x;
    this.Y = y;
  }
}
export {
  Point
};
