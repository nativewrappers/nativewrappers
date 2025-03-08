import { ClassTypes } from "@common/utils/ClassTypes";
import { BaseEntity } from "./BaseEntity";

export class Prop extends BaseEntity {
  protected type = ClassTypes.Prop;
  constructor(handle: number) {
    super(handle);
  }

  /**
   * Get an interable list of props currently on the server
   * @returns Iterable list of Props.
   */
  public static *AllProps(): IterableIterator<Prop> {
    for (const prop of GetAllObjects() as unknown as number[]) {
      yield new Prop(prop);
    }
  }

  static fromNetworkId(networkId: number): Prop | null {
    const ent = NetworkGetEntityFromNetworkId(networkId);
    if (ent === 0) return null;
    return new Prop(ent);
  }

  static fromStateBagName(stateBagName: string): Prop | null {
    const ent = GetEntityFromStateBagName(stateBagName);
    if (ent === 0) return null;
    return new Prop(ent);
  }

  public static fromHandle(handle: number): Prop {
    return new Prop(handle);
  }
}
