/**
 * Calculate the offset from the top of the page for a component.
 * @param {Object} node - The HMTL element to calculate the offset for
 * @returns {number}
 */
export function calculateOffset(node: HTMLElement | null) {
  let n: HTMLElement | null = node;
  let offsetTop = 0;
  do {
    if (n !== null) {
      offsetTop += n.offsetTop;
      n = n.offsetParent as HTMLElement;
    } else {
      break;
    }
  } while (n);
  return offsetTop;
}
