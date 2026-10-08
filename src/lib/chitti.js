export const CHITTI_OPEN = "chitti:open";

export function openChitti() {
  window.dispatchEvent(new CustomEvent(CHITTI_OPEN));
}

export function getModKey() {
  if (typeof navigator === "undefined") return "⌘";
  return /Mac|iPhone|iPad|iPod/.test(navigator.platform) ? "⌘" : "Ctrl";
}
