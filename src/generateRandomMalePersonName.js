import { shuffle } from "./shuffle.js";
import { lastNames, maleNames } from "./dictionary/index.js";

/**
 * Generate Random Male Person Name
 *
 * @param {number} count
 * @param {string} separator
 * @returns {string}
 */
export const generateRandomMalePersonName = (count = 2, separator = " ") => {
  let names = [];
  for(let x=0; x<count; x++) {
    names.push(shuffle(maleNames)[0]);
  }
  names.push(shuffle(lastNames)[0]);
  return names.join(separator);
};