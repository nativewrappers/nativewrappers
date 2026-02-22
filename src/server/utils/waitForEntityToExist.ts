import { Delay } from "@common/utils/Delay";

/**
 * Waits for the specified {@param netId} to exist on the server.
 *
 * This is needed due to the fact that when creating and instantly sending a
 * net id on the client we can race the actual creation of the entity, making
 *`NetworkGetEntityFromNetworkId` return `0`, this will resolve itself within the
 * next game tick (approximately ever 8ms for the sync thread).
 *
 * @param netId the network id of the entity to wait to exist
 * @param [timeoutMs=1000] the amount of time to wait for the entity to exist before giving up
 */
export async function waitForEntityToExist(netId: number, timeoutMs = 1000): Promise<number | null> {
  const startTime = GetGameTimer();
  const timeout = startTime + timeoutMs;

  while (GetGameTimer() < timeout) {
    const entity = NetworkGetEntityFromNetworkId(netId);
    if (entity !== 0) {
      return entity;
    }
    await Delay(0);
  }

  return null;
}


