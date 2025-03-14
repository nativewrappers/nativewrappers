import { Delay } from "@common/utils/Delay";

/**
 * A utility to load an animation dictionary, anything that loads an animation should RemoveAnimDict after its finish being used.
 * @param animDict the animation dictionary to load
 * @param waitTime how long to wait for the dictionary to load
 * @returns {boolean} if the animation successfully loaded
 */
export const LoadAnimDict = async (animDict: string, waitTime = 1000): Promise<boolean> => {
  const start = GetGameTimer();

  if (!HasAnimDictLoaded(animDict)) {
    RequestAnimDict(animDict);
  }

  while (!HasAnimDictLoaded(animDict)) {
    if (GetGameTimer() - start >= waitTime) return false;
    await Delay(0);
  }

  return true;
};

/**
 * A utility to load multiple animation dictionary, anything that loads an animation should RemoveAnimDict after its finish being used.
 * @param animDict the animation dictionary to load
 * @param waitTime how long to wait for the dictionary to load
 * @returns if the animation successfully loaded, if the animation failed to load it will return an array of animations that failed to load
 */
export const LoadAnimDictArray = async (animDict: string[], waitTime = 1000): Promise<[boolean, string[] | null]> => {
  const start = GetGameTimer();

  for (const dict of animDict) {
    if (!HasAnimDictLoaded(dict)) {
      RequestAnimDict(dict);
    }
  }
  // TODO: more optimized way to do this
  const animsLoaded: Set<string> = new Set();
  while (animsLoaded.size !== animDict.length) {
    for (const dict of animDict) {
      if (!animsLoaded.has(dict) && HasAnimDictLoaded(dict)) {
        animsLoaded.add(dict);
      }
    }

    if (GetGameTimer() - start >= waitTime) return [false, animDict.filter((dict) => !animsLoaded.has(dict))];
    await Delay(0);
  }

  return [true, null];
};

/**
 * A utility to unload multiple animation dictionary
 * @param animDict the animation dictionaries to unload
 */
export const RemoveAnimDictArray = (animDict: string[]): void => {
  for (const dict of animDict) {
    RemoveAnimDict(dict);
  }
};
