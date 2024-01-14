// Return an array without duplicates

// Step 2
//
// Add 'const' and 'let'
// Replace loop with for...of

'use strict'

const getDistinctArray = (initialArray) => {
  const distinctArray = new Set();
  let w = 0;
  for (const element of initialArray) {
    if (distinctArray.has(element)) {
      delete initialArray[w];
    } else {
      distinctArray.add(element);
    }
    w++;
  }
  return initialArray.filter
  (x => typeof x === 'number');
};

module.exports = getDistinctArray;
