import { GlobalData } from "./GlobalData";

export class Convar {
  /**
   * @returns the current console buffer
   */
  public buffer(): string {
    $CLIENT: {
      if (GlobalData.IS_CLIENT) {
        throw new Error("This function isn't available on the client");
      }
    }
    return GetConsoleBuffer();
  }

  public get(variable: string, defaultVar: string): string {
    return GetConvar(variable, defaultVar);
  }

  public getInt(variable: string, defaultVar: number): number {
    return GetConvarInt(variable, defaultVar);
  }

  public getFloat(varName: string, defaultVar: number): number {
    return GetConvarFloat(varName, defaultVar);
  }

  public getBool(varName: string, defaultVar: boolean): boolean {
    return GetConvarBool(varName, defaultVar);
  }

  public set(variable: string, value: string): void {
    $CLIENT: {
      if (GlobalData.IS_CLIENT) {
        throw new Error("This function isn't available on the client");
      }
    }
    SetConvar(variable, value);
  }

  public setReplicated(variable: string, value: string): void {
    $CLIENT: {
      if (GlobalData.IS_CLIENT) {
        throw new Error("This function isn't available on the client");
      }
    }
    SetConvarReplicated(variable, value);
  }

  public setServerInfo(variable: string, value: string): void {
    $CLIENT: {
      if (GlobalData.IS_CLIENT) {
        throw new Error("This function isn't available on the client");
      }
    }
    SetConvarServerInfo(variable, value);
  }
}
