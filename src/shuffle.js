/**
 * Shuffle Object
 * 
 * The Schwartzian Transform way @link https://en.wikipedia.org/wiki/Schwartzian_transform
 * Stolen from @link https://stackoverflow.com/a/46545530
 * 
 * @param {object|Array} unshuffled
 */
export const shuffle = unshuffled => unshuffled
  .map(value => ({value, sort: Math.random()}))
  .sort((a, b) => a.sort - b.sort)
  .map(({value}) => value);
