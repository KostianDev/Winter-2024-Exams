// Increment all numbers in dictionary

// Step 4
//
// Replace initial dictionary with another variable

'use strict'

let incrementNumbers = (initialDictionary) => {
  const finalDictionary = {...initialDictionary};
  for (const key in initialDictionary) {
    if (typeof initialDictionary[key] === 'number') {
      finalDictionary[key] = initialDictionary[key] + 1;
    }
  }
  return finalDictionary;
};

module.exports = incrementNumbers;
