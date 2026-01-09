var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Delay } from "../common/utils/Delay";
const LoadAnimDict = /* @__PURE__ */ __name(async (animDict, waitTime = 1e3) => {
  const start = GetGameTimer();
  if (!HasAnimDictLoaded(animDict)) {
    RequestAnimDict(animDict);
  }
  while (!HasAnimDictLoaded(animDict)) {
    if (GetGameTimer() - start >= waitTime) return false;
    await Delay(0);
  }
  return true;
}, "LoadAnimDict");
const LoadAnimDictArray = /* @__PURE__ */ __name(async (animDict, waitTime = 1e3) => {
  const start = GetGameTimer();
  for (const dict of animDict) {
    if (!HasAnimDictLoaded(dict)) {
      RequestAnimDict(dict);
    }
  }
  const animsLoaded = /* @__PURE__ */ new Set();
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
}, "LoadAnimDictArray");
const RemoveAnimDictArray = /* @__PURE__ */ __name((animDict) => {
  for (const dict of animDict) {
    RemoveAnimDict(dict);
  }
}, "RemoveAnimDictArray");
export {
  LoadAnimDict,
  LoadAnimDictArray,
  RemoveAnimDictArray
};
