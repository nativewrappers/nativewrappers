export class GlobalData {
  static CurrentResource = GetCurrentResourceName();
  static IS_SERVER = IsDuplicityVersion();
  static IS_CLIENT = !GlobalData.IS_SERVER;
  static NetworkTick: number | null = null;
  static NetworkedTicks: any[] = [];
}
