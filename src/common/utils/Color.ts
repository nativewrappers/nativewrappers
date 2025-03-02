export class Color {
  public static Transparent = new Color(0, 0, 0, 0);
  public static Black = new Color(0, 0, 0);
  public static White = new Color(255, 255, 255);
  public static WhiteSmoke = new Color(245, 245, 245);

  public static fromArgb(a: number, r: number, g: number, b: number): Color {
    return new Color(r, g, b, a);
  }

  public static fromRgb(r: number, g: number, b: number): Color {
    return new Color(r, g, b);
  }

  public static fromArray(primitive: [number, number, number] | number[]): Color {
    return new Color(primitive[0], primitive[1], primitive[2], 255);
  }

  public a: number;
  public r: number;
  public g: number;
  public b: number;

  constructor(r: number, g: number, b: number, a = 255) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
}
