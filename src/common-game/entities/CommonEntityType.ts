import { CommonPed } from "./CommonPed";
import { CommonProp } from "./CommonProp";
import { CommonVehicle } from "./CommonVehicle";

export type CommonEntity = CommonProp | CommonPed | CommonVehicle | null;
