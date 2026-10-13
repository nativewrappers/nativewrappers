var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { BaseEntity } from "./BaseEntity";
class Entity extends BaseEntity {
  static {
    __name(this, "Entity");
  }
  constructor(handle) {
    super(handle);
  }
  static fromNetworkId(netId) {
    return new Entity(NetworkGetEntityFromNetworkId(netId));
  }
  static fromHandle(handle) {
    return new Entity(handle);
  }
}
export {
  Entity
};
