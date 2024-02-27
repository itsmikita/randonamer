import { shuffle } from "./shuffle.js";
import { lastNames, femaleNames } from "./dictionary/index.js";

/**
 * Generate Random Female Person Name
 *
 * @param {number} count
 * @param {string} separator
 * @returns {string}
 */
export const generateRandomFemalePersonName = (count = 2, separator = " ") => {
  let names = [];
  for(let x=0; x<count; x++) {
    names.push(shuffle(femaleNames)[0]);
  }
  names.push(shuffle(lastNames)[0]);
  return names.join(separator);
};