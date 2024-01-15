// Return an array without duplicates

// Step 4
//
// Make array from set
// Change 'return'
// Fixed naming on step 3

'use strict'

const getDistinctArray = (initialArray) => {
  const distinctSet = new Set();
  for (const element of initialArray) {
      distinctSet.add(element);
  }
  return Array.from(distinctSet);
};

module.exports = getDistinctArray;
