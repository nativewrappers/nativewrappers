/**
 * @returns This will return an unsigned hash for the current string
 */
export function generateHash(str: string): number {
  return GetHashKey(str) & 0xffff_ffff;
}
