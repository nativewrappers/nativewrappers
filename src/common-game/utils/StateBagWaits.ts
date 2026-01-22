import { Delay } from "@common/utils/Delay";

/**
 * @param stateBag the state bag name to try to get the entity from
 * @param [timeoutInMs=5000] the timeout we should wait before giving up.
 */
export async function WaitForEntityFromStateBagToExist(
  stateBag: string,
  timeoutInMs = 5000,
): Promise<number | undefined> {
  const timeout = GetGameTimer() + timeoutInMs;
  let ent = GetEntityFromStateBagName(stateBag);
  while (ent === 0) {
    if (timeout < GetGameTimer()) break;
    ent = GetEntityFromStateBagName(stateBag);
    await Delay(150);
  }

  return ent !== 0 ? ent : undefined;
}

/**
 * @param stateBag the state bag name to try to get the entity from
 * @param [timeoutInMs=5000] the timeout we should wait before giving up.
 */
export async function WaitForPlayerFromStateBagToExist(
  stateBag: string,
  timeoutInMs = 5000,
): Promise<number | undefined> {
  const timeout = GetGameTimer() + timeoutInMs;
  let ply = GetPlayerFromStateBagName(stateBag);
  while (ply === 0) {
    if (timeout < GetGameTimer()) break;
    ply = GetPlayerFromStateBagName(stateBag);
    await Delay(150);
  }

  return ply !== 0 ? ply : undefined;
}
