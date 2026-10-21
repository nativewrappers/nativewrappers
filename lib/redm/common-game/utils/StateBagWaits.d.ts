/**
 * @param stateBag the state bag name to try to get the entity from
 * @param [timeoutInMs=5000] the timeout we should wait before giving up.
 */
export declare function WaitForEntityFromStateBagToExist(stateBag: string, timeoutInMs?: number): Promise<number | undefined>;
/**
 * @param stateBag the state bag name to try to get the entity from
 * @param [timeoutInMs=5000] the timeout we should wait before giving up.
 */
export declare function WaitForPlayerFromStateBagToExist(stateBag: string, timeoutInMs?: number): Promise<number | undefined>;
