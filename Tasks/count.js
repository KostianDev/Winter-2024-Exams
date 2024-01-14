// Sum all number values in dict

// Step 3
//
// Replaced loop with for...of
// Removed unneeded variable

'use strict'

const getNumberValuesSum = (object) => {
  let sum = 0;
  const keys = Object.keys(object);
  for (const key of keys) {
    if (typeof object[key] === 'number') sum += object[key];
  }
  return sum;
};

module.exports = getNumberValuesSum;
