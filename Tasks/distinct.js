// Return an array without duplicates

// Step 3
//
// Remove unneeded code

'use strict'

const getDistinctArray = (initialArray) => {
  const distinctSet = new Set();
  for (const element of initialArray) {
      distinctSet.add(element);
  }
  return initialArray.filter
  (x => typeof x === 'number');
};

module.exports = getDistinctArray;
