// Sum all number values in dict

// Step 2
//
// Add 'const' and 'let'
// Improve naming

'use strict'

const getNumberValuesSum = (object) => {
  let sum = 0;
  const keys = Object.keys(object);
  keys.forEach((key) => {
    const value = object[key];
    if (typeof value === 'number') sum += value;
  });
  return sum;
};

module.exports = getNumberValuesSum;
