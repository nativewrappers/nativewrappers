var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { ClassTypes } from "../common/utils/ClassTypes";
import { BaseEntity } from "./BaseEntity";
class Prop extends BaseEntity {
  static {
    __name(this, "Prop");
  }
  type = ClassTypes.Prop;
  constructor(handle) {
    super(handle);
  }
  /**
   * Get an interable list of props currently on the server
   * @returns Iterable list of Props.
   */
  static *AllProps() {
    for (const prop of GetAllObjects()) {
      yield new Prop(prop);
    }
  }
  static fromNetworkId(networkId) {
    const ent = NetworkGetEntityFromNetworkId(networkId);
    if (ent === 0) return null;
    return new Prop(ent);
  }
  static fromStateBagName(stateBagName) {
    const ent = GetEntityFromStateBagName(stateBagName);
    if (ent === 0) return null;
    return new Prop(ent);
  }
  static fromHandle(handle) {
    return new Prop(handle);
  }
}
export {
  Prop
};
