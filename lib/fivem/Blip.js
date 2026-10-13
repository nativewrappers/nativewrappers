var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Vector3 } from "./common/utils/Vector";
import { GetEntityClassFromId } from "./utils/GetEntityFromEntityIds";
class Blip {
  static {
    __name(this, "Blip");
  }
  handle;
  constructor(handle) {
    this.handle = handle;
  }
  get Handle() {
    return this.handle;
  }
  get Position() {
    return Vector3.fromArray(GetBlipInfoIdCoord(this.handle));
  }
  set Position(location) {
    SetBlipCoords(this.handle, location.x, location.y, location.z);
  }
  set Rotation(rotation) {
    SetBlipRotation(this.handle, rotation);
  }
  set Scale(scale) {
    SetBlipScale(this.handle, scale);
  }
  get Type() {
    return GetBlipInfoIdType(this.handle);
  }
  get Alpha() {
    return GetBlipAlpha(this.handle);
  }
  set Alpha(alpha) {
    SetBlipAlpha(this.handle, alpha);
  }
  set Priority(priority) {
    SetBlipPriority(this.handle, priority);
  }
  set NumberLabel(number) {
    ShowNumberOnBlip(this.handle, number);
  }
  get Color() {
    return GetBlipColour(this.handle);
  }
  set Color(color) {
    SetBlipColour(this.handle, color);
  }
  get Sprite() {
    return GetBlipSprite(this.handle);
  }
  set Sprite(sprite) {
    SetBlipSprite(this.handle, sprite);
  }
  set Display(display) {
    SetBlipDisplay(this.handle, display);
  }
  set Name(name) {
    BeginTextCommandSetBlipName("STRING");
    AddTextComponentSubstringPlayerName(name);
    EndTextCommandSetBlipName(this.handle);
  }
  setNameToPlayerName(player) {
    SetBlipNameToPlayerName(this.handle, player.Handle);
  }
  get Entity() {
    return GetEntityClassFromId(GetBlipInfoIdEntityIndex(this.handle));
  }
  set ShowHeadingIndicator(show) {
    ShowHeadingIndicatorOnBlip(this.handle, show);
  }
  set ShowRoute(show) {
    SetBlipRoute(this.handle, show);
  }
  set IsFriendly(friendly) {
    SetBlipAsFriendly(this.handle, friendly);
  }
  set IsFriend(friend) {
    SetBlipFriend(this.handle, friend);
  }
  set IsCrew(crew) {
    SetBlipCrew(this.handle, crew);
  }
  get IsFlashing() {
    return IsBlipFlashing(this.handle);
  }
  set IsFlashing(flashing) {
    SetBlipFlashes(this.handle, flashing);
  }
  get IsOnMinimap() {
    return IsBlipOnMinimap(this.handle);
  }
  get IsShortRange() {
    return IsBlipShortRange(this.handle);
  }
  set IsShortRange(shortRange) {
    SetBlipAsShortRange(this.handle, shortRange);
  }
  removeNumberLabel() {
    HideNumberOnBlip(this.handle);
  }
  delete() {
    if (this.exists()) {
      RemoveBlip(this.handle);
    }
  }
  exists() {
    return DoesBlipExist(this.handle);
  }
}
export {
  Blip
};
