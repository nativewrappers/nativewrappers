var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Font } from "../enums/Font";
import { Screen } from "../ui/Screen";
import { Text } from "../ui/Text";
import { Maths } from "./Maths";
class _String {
  static {
    __name(this, "_String");
  }
  static stringToArray(input) {
    let stringsNeeded = 1;
    if (input.length > 99) {
      stringsNeeded = Math.ceil(input.length / 99);
    }
    const outputString = new Array(stringsNeeded);
    for (let i = 0; i < stringsNeeded; i++) {
      outputString[i] = input.substring(i * 99, i * 99 + Maths.clamp(input.substring(i * 99).length, 0, 99));
    }
    return outputString;
  }
  static measureStringWidthNoConvert(input, font = Font.ChaletLondon, scale = 0) {
    SetTextEntryForWidth("STRING");
    Text.addLongString(input);
    SetTextFont(font);
    SetTextScale(1, scale);
    return GetTextScreenWidth(false);
  }
  static measureString(str, font, scale, screenWidth = Screen.ScaledWidth) {
    return this.measureStringWidthNoConvert(str, font, scale) * screenWidth;
  }
}
export {
  _String
};
