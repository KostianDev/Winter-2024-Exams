// Return an array without duplicates

// Step 1
//
// Improve naming
// Add 'use strict'

'use strict'

getDistinctArray = (initialArray) => {
  distinctArray = new Set();
  w = 0;
  initialArray.forEach((element) => {
    if (distinctArray.has(element)) {
      delete initialArray[w];
    } else {
      distinctArray.add(element);
    }
    w++;
  });
  return initialArray.filter
  (x => typeof x === 'number');
};

module.exports = getDistinctArray;
