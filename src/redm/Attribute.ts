import type { eAttributeCore, ePedAttribute, eHudStatusEffect } from "./enums/Attributes";
import type { Ped } from "./entities/Ped";
import { _N } from "./utils/Native";

export class CoreAttribute {
  private handle: number;
  private attribute: eAttributeCore;
  constructor(ped: Ped, attribute: eAttributeCore) {
    this.handle = ped.Handle;
    this.attribute = attribute;
  }

  /**
   * This doesn't seem to actually do anything
   * @todo maybe remove unless theres a valid use case
   * @param amount
   * @param makeSound
   */
  enableOverpower(amount: number, makeSound = false): void {
    // EnableAttributeCoreOverpower
    _N("0x4AF5A4C7B9157D14", this.handle, this.attribute, amount, makeSound);
  }

  get Overpowered(): boolean {
    return _N<boolean>("0x200373A8DF081F22", this.attribute, Citizen.resultAsInteger());
  }

  /**
   * @returns the amount of overpower time left in seconds
   */
  get OverpoweredTimeLeft(): number {
    // GetAttributeCoreOverpowerSecondsLeft
    return _N<number>("0xB429F58803D285B1", this.handle, this.attribute, Citizen.resultAsInteger());
  }

  /**
   * Returns how full the core is
   */
  get CoreValue(): number {
    return GetAttributeCoreValue(this.handle, this.attribute);
  }

  set CoreValue(amount: number) {
    // SetAttributeCoreValue
    _N("0xC6258F41D86676E0", this.handle, this.attribute, amount);
  }
}

export class PedAttribute {
  private handle: number;
  private attribute: ePedAttribute;
  constructor(ped: Ped, attribute: ePedAttribute) {
    this.handle = ped.Handle;
    this.attribute = attribute;
  }

  /**
   *
   * @param amount the amount of points to add to the attribute
   */
  addPoints(amount: number): void {
    AddAttributePoints(this.handle, this.attribute, amount);
  }

  /**
   * Disables the overpower state on this attribute, see {@link enableOverpower} on how to enable
   */
  disableOverpower(): void {
    DisableAttributeOverpower(this.handle, this.attribute);
  }

  /**
   *
   * @param amount the amount to overpower this attribute by
   * @param makeSound if activating the overpower should play sound
   */
  enableOverpower(amount: number, makeSound = false): void {
    // EnableAttributeOverpower
    _N("0xF6A7C08DF2E28B28", this.handle, this.attribute, amount, makeSound);
  }

  /**
   * Gets the amount of attribute points the ped has
   */
  get Points(): number {
    return GetAttributePoints(this.handle, this.attribute);
  }

  set Points(amount: number) {
    SetAttributePoints(this.handle, this.attribute, amount);
  }

  get Rank(): number {
    return GetAttributeRank(this.handle, this.attribute);
  }

  set BaseRank(amount: number) {
    SetAttributeBaseRank(this.handle, this.attribute, amount);
  }

  get BaseRank(): number {
    return GetAttributeBaseRank(this.handle, this.attribute);
  }

  set BonusRank(amount: number) {
    SetAttributeBonusRank(this.handle, this.attribute, amount);
  }

  get BonusRank(): number {
    return GetAttributeBonusRank(this.handle, this.attribute);
  }

  get MaxRank(): number {
    // GetMaxAttributeRank
    return _N<number>("0x704674A0535A471D", this.attribute, Citizen.resultAsInteger());
  }

  get Overpowered(): boolean {
    // IsAttributeOverpowered
    return _N<boolean>("0x103C2F885ABEB00B", this.attribute, Citizen.resultAsInteger());
  }
}

// There's probably a better way to do this but this will do for now as it reduces repetition
export class Attributes {
  private pedAttributes: PedAttribute[] = [];
  private coreAttributes: CoreAttribute[] = [];
  constructor(ped: Ped) {
    for (let i = 0; i <= 21; i++) {
      this.pedAttributes[i] = new PedAttribute(ped, i);
    }

    for (let i = 0; i <= 2; i++) {
      this.coreAttributes[i] = new CoreAttribute(ped, i);
    }
  }

  getCore(attribute: eAttributeCore): CoreAttribute {
    if (attribute > 2) throw new RangeError("The max enum for CoreAttribute is 2");
    if (attribute < 0) throw new RangeError("The minimum enum for CoreAttribute is 0");
    // This should always be valid
    return this.coreAttributes[attribute];
  }

  get(attribute: ePedAttribute): PedAttribute {
    if (attribute > 22) throw new RangeError("The max enum for PedAttribute is 22");
    if (attribute < 0) throw new RangeError("The minimum enum for PedAttribute is 0");
    return this.pedAttributes[attribute];
  }

  set CoreIcon(status: eHudStatusEffect) {
    if (status > 15) throw new RangeError("The max enum for StatusEffect is 15");
    if (status < 0) throw new RangeError("The minimum enum for StatusEffect is 0");
    _N("0xA4D3A1C008F250DF", status);
  }

  set PeriodicIcon(status: eHudStatusEffect) {
    if (status > 15) throw new RangeError("The max enum for StatusEffect is 15!");
    if (status < 0) throw new RangeError("The minimum enum for StatusEffect is 0");
    _N("0xFB6E111908502871", status);
  }
}
