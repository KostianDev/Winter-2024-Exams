// Increment all numbers in dictionary

// Step 5
//
// Replace for...in with for...of
// Change 'let' to 'const'

'use strict'

const incrementNumbers = (initialDictionary) => {
  const finalDictionary = {...initialDictionary};
  for (const key of Object.keys(initialDictionary)) {
    if (typeof initialDictionary[key] === 'number') {
      finalDictionary[key] = initialDictionary[key] + 1;
    }
  }
  return finalDictionary;
};

module.exports = incrementNumbers;
