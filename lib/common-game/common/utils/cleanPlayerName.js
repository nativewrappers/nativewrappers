var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
const cleanPlayerName = /* @__PURE__ */ __name((original) => {
  let displayName = original.substring(0, 75).replace(
    // biome-ignore lint/suspicious/noMisleadingCharacterClass: <explanation>
    /[\u0000-\u001F\u007F-\u009F\u200B-\u200D\uFEFF\u200E\uA9C1-\uA9C5\u239B-\u23AD]/g,
    ""
  ).replace(
    /~(HUD_\S+|HC_\S+|[a-z]|[a1]_\d+|bold|italic|ws|wanted_star|nrt|EX_R\*|BLIP_\S+|ACCEPT|CANCEL|PAD_\S+|INPUT_\S+|INPUTGROUP_\S+)~/gi,
    ""
  ).replace(/\^\d/gi, "").replace(/\p{Mark}{2,}/gu, "").replace(/\s+/g, " ").trim();
  if (!displayName.length) displayName = "empty name";
  return displayName;
}, "cleanPlayerName");
export {
  cleanPlayerName
};
