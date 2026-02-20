var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { _N } from "./utils/Native";
class CoreAttribute {
  static {
    __name(this, "CoreAttribute");
  }
  handle;
  attribute;
  constructor(ped, attribute) {
    this.handle = ped.Handle;
    this.attribute = attribute;
  }
  /**
   * This doesn't seem to actually do anything
   * @todo maybe remove unless theres a valid use case
   * @param amount
   * @param makeSound
   */
  enableOverpower(amount, makeSound = false) {
    _N("0x4AF5A4C7B9157D14", this.handle, this.attribute, amount, makeSound);
  }
  get Overpowered() {
    return _N("0x200373A8DF081F22", this.attribute, Citizen.resultAsInteger());
  }
  /**
   * @returns the amount of overpower time left in seconds
   */
  get OverpoweredTimeLeft() {
    return _N("0xB429F58803D285B1", this.handle, this.attribute, Citizen.resultAsInteger());
  }
  /**
   * Returns how full the core is
   */
  get CoreValue() {
    return GetAttributeCoreValue(this.handle, this.attribute);
  }
  set CoreValue(amount) {
    _N("0xC6258F41D86676E0", this.handle, this.attribute, amount);
  }
}
class PedAttribute {
  static {
    __name(this, "PedAttribute");
  }
  handle;
  attribute;
  constructor(ped, attribute) {
    this.handle = ped.Handle;
    this.attribute = attribute;
  }
  /**
   *
   * @param amount the amount of points to add to the attribute
   */
  addPoints(amount) {
    AddAttributePoints(this.handle, this.attribute, amount);
  }
  /**
   * Disables the overpower state on this attribute, see {@link enableOverpower} on how to enable
   */
  disableOverpower() {
    DisableAttributeOverpower(this.handle, this.attribute);
  }
  /**
   *
   * @param amount the amount to overpower this attribute by
   * @param makeSound if activating the overpower should play sound
   */
  enableOverpower(amount, makeSound = false) {
    _N("0xF6A7C08DF2E28B28", this.handle, this.attribute, amount, makeSound);
  }
  /**
   * Gets the amount of attribute points the ped has
   */
  get Points() {
    return GetAttributePoints(this.handle, this.attribute);
  }
  set Points(amount) {
    SetAttributePoints(this.handle, this.attribute, amount);
  }
  get Rank() {
    return GetAttributeRank(this.handle, this.attribute);
  }
  set BaseRank(amount) {
    SetAttributeBaseRank(this.handle, this.attribute, amount);
  }
  get BaseRank() {
    return GetAttributeBaseRank(this.handle, this.attribute);
  }
  set BonusRank(amount) {
    SetAttributeBonusRank(this.handle, this.attribute, amount);
  }
  get BonusRank() {
    return GetAttributeBonusRank(this.handle, this.attribute);
  }
  get MaxRank() {
    return _N("0x704674A0535A471D", this.attribute, Citizen.resultAsInteger());
  }
  get Overpowered() {
    return _N("0x103C2F885ABEB00B", this.attribute, Citizen.resultAsInteger());
  }
}
class Attributes {
  static {
    __name(this, "Attributes");
  }
  pedAttributes = [];
  coreAttributes = [];
  constructor(ped) {
    for (let i = 0; i <= 21; i++) {
      this.pedAttributes[i] = new PedAttribute(ped, i);
    }
    for (let i = 0; i <= 2; i++) {
      this.coreAttributes[i] = new CoreAttribute(ped, i);
    }
  }
  getCore(attribute) {
    if (attribute > 2) throw new RangeError("The max enum for CoreAttribute is 2");
    if (attribute < 0) throw new RangeError("The minimum enum for CoreAttribute is 0");
    return this.coreAttributes[attribute];
  }
  get(attribute) {
    if (attribute > 22) throw new RangeError("The max enum for PedAttribute is 22");
    if (attribute < 0) throw new RangeError("The minimum enum for PedAttribute is 0");
    return this.pedAttributes[attribute];
  }
  set CoreIcon(status) {
    if (status > 15) throw new RangeError("The max enum for StatusEffect is 15");
    if (status < 0) throw new RangeError("The minimum enum for StatusEffect is 0");
    _N("0xA4D3A1C008F250DF", status);
  }
  set PeriodicIcon(status) {
    if (status > 15) throw new RangeError("The max enum for StatusEffect is 15!");
    if (status < 0) throw new RangeError("The minimum enum for StatusEffect is 0");
    _N("0xFB6E111908502871", status);
  }
}
export {
  Attributes,
  CoreAttribute,
  PedAttribute
};
