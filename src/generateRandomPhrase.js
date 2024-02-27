import { shuffle } from "./shuffle.js";
import { adjectives, nouns } from "./dictionary/index.js";

/**
 * Generate Random Phrase
 * 
 * @param {string} separator
 * @returns {string}
 */
export const generateRandomPhrase = (separator = " ") =>
  `${shuffle(adjectives)[0]}${separator}${shuffle(nouns)[0]}`;
