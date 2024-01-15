// Increment all numbers in dictionary

// Step 2
//
// Add 'const'
// Change from 'let' to 'const'
// Remove unused variable

'use strict'

let incrementNumbers = (initialDictionary) => {
  for (const key in initialDictionary) {
    if ((typeof initialDictionary[key]).charAt(0).toUpperCase() === 'N') {
      initialDictionary[key] = initialDictionary[key] + 1;
    }
  }
  return initialDictionary;
};

module.exports = incrementNumbers;
