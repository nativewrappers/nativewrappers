var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
class Color {
  static {
    __name(this, "Color");
  }
  static Transparent = new Color(0, 0, 0, 0);
  static Black = new Color(0, 0, 0);
  static White = new Color(255, 255, 255);
  static WhiteSmoke = new Color(245, 245, 245);
  static fromArgb(a, r, g, b) {
    return new Color(r, g, b, a);
  }
  static fromRgb(r, g, b) {
    return new Color(r, g, b);
  }
  static fromArray(primitive) {
    return new Color(primitive[0], primitive[1], primitive[2], 255);
  }
  a;
  r;
  g;
  b;
  constructor(r, g, b, a = 255) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
}
export {
  Color
};
