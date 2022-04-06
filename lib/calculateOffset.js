'use strict';

/**
 * Calculate the offset from the top of the page for a component.
 * @param {Object} node - The HMTL element to calculate the offset for
 * @returns {number}
 */
module.exports = function calculateOffset(node) {
  let n = node;
  let offsetTop = 0;
  do {
    offsetTop += n.offsetTop;
    n = n.offsetParent;
  } while (n)
  return offsetTop;
};
