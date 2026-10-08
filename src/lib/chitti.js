export const CHITTI_OPEN = "chitti:open";

export function openChitti() {
  window.dispatchEvent(new CustomEvent(CHITTI_OPEN));
}
