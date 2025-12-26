/**
 * Waits for the specified {@param netId} to exist, useful for when you're creating an entity on the client
 * ane sending it to the server, as it can "race" the net event, resulting in it never getting created.
 * @param netId the network id of the entity to wait to exist
 * @param [timeoutMs=1000] the amount of time to wait for the entity to exist before giving up
 */
export declare function waitForEntityToExist(netId: number, timeoutMs?: number): Promise<number | null>;
