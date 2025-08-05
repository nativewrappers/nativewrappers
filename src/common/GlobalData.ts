export class GlobalData {
  static CurrentResource = GetCurrentResourceName();
  static GameName = GetGameName();
  static GameBuild = GetGameBuildNumber();
  static IS_SERVER = IsDuplicityVersion();
  static IS_CLIENT = !GlobalData.IS_SERVER;
  static NetworkTick: number | null = null;
  static NetworkedTicks: any[] = [];
  static EnablePrettyPrint = true;
}
