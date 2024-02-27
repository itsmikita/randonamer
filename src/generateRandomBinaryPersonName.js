import { shuffle } from "./shuffle.js";
import { lastNames, femaleNames, maleNames } from "./dictionary/index.js";

/**
 * Generate Random Binary Person Name
 *
 * @param {number} count
 * @param {string} separator
 * @returns {string}
 */
export const generateRandomBinaryPersonName = (count = 2, separator = " ") => {
  let names = [];
  for(let x=0; x<count; x++) {
    names.push(shuffle([ ...femaleNames, ...maleNames ])[0]);
  }
  names.push(shuffle(lastNames)[0]);
  return names.join(separator);
};