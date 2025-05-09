import { VehicleWindowIndex } from "fivem/enums/Vehicle";
import type { Vehicle } from "./Vehicle";
import { VehicleWindow } from "./VehicleWindow";

export class VehicleWindowCollection {
  private _owner: Vehicle;
  private readonly _vehicleWindows: Map<VehicleWindowIndex, VehicleWindow> = new Map<
    VehicleWindowIndex,
    VehicleWindow
  >();

  constructor(owner: Vehicle) {
    this._owner = owner;
  }

  public getWindow(index: VehicleWindowIndex): VehicleWindow {
    const window = this._vehicleWindows.get(index);
    if (!window) {
      const vehicleWindow = new VehicleWindow(this._owner, index);
      this._vehicleWindows.set(index, vehicleWindow);
      return vehicleWindow;
    }
    return window;
  }

  public getAllWindows(): (VehicleWindow | null)[] {
    return Object.keys(VehicleWindowIndex)
      .filter((key) => !isNaN(Number(key)))
      .map((key) => {
        const index = Number(key);
        if (this.hasWindow(index)) {
          return this.getWindow(index);
        }
        return null;
      })
      .filter((w) => w);
  }

  public get AreAllWindowsIntact(): boolean {
    return AreAllVehicleWindowsIntact(this._owner.Handle);
  }

  public rollDownAllWindows(): void {
    this.getAllWindows().forEach((window) => {
      window?.rollDown();
    });
  }

  public rollUpAllWindows(): void {
    this.getAllWindows().forEach((window) => {
      window?.rollUp();
    });
  }

  public hasWindow(window: VehicleWindowIndex): boolean {
    switch (window) {
      case VehicleWindowIndex.FrontLeftWindow:
        return this._owner.Bones.hasBone("window_lf");
      case VehicleWindowIndex.FrontRightWindow:
        return this._owner.Bones.hasBone("window_rf");
      case VehicleWindowIndex.BackLeftWindow:
        return this._owner.Bones.hasBone("window_lr");
      case VehicleWindowIndex.BackRightWindow:
        return this._owner.Bones.hasBone("window_rr");
      default:
        return false;
    }
  }
}
