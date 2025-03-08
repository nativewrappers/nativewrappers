import { Vector2, Vector3, Vector4 } from "@common/utils/Vector";
import { ClassTypes } from "../common/utils/ClassTypes";
import { BaseEntity } from "./models/BaseEntity";
import { Ped } from "./models/Ped";
import { Player } from "./models/Player";
import { Prop } from "./models/Prop";
import { Vehicle } from "./models/Vehicle";

export type NetEvent = (...args: any[]) => void;

const getClassFromArguments = (...args: any[]): any[] => {
  const newArgs: any[] = [];

  for (const arg of args) {
    if (!arg.type) {
      newArgs.push(arg);
      continue;
    }
    switch (arg.type) {
      case ClassTypes.Vector2: {
        newArgs.push(Vector2.fromObject(arg));
        continue;
      }
      case ClassTypes.Vector3: {
        newArgs.push(Vector3.fromObject(arg));
        continue;
      }
      case ClassTypes.Vector4: {
        newArgs.push(Vector4.fromObject(arg));
        continue;
      }
      case ClassTypes.Ped: {
        newArgs.push(Ped.fromNetworkId(arg.handle));
        continue;
      }
      case ClassTypes.Player: {
        newArgs.push(Player.fromServerId(arg.source));
        continue;
      }
      case ClassTypes.Prop: {
        newArgs.push(Prop.fromNetworkId(arg.handle));
        continue;
      }
      case ClassTypes.Vehicle: {
        newArgs.push(Vehicle.fromNetworkId(arg.netId));
        continue;
      }
      case ClassTypes.Entity: {
        newArgs.push(BaseEntity.fromNetworkId(arg.netId));
        continue;
      }
      default: {
        newArgs.push(arg);
      }
    }
  }
  return newArgs;
};

// TODO: Add a third argument to enable recursive decent and change any
// object/array to its proper type

export class Events {
  /**
   * An onNet wrapper that properly converts the type into the correct type
   */
  static onNet = (eventName: string, event: NetEvent) => {
    onNet(eventName, (...args: any[]) => {
      event(...getClassFromArguments(...args));
    });
  };

  /**
   * An on wrapper that properly converts the classes
   */
  static on = (eventName: string, event: NetEvent) => {
    on(eventName, (...args: any[]) => {
      event(...getClassFromArguments(...args));
    });
  };
}
