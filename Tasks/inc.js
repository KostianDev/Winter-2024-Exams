// Increment all numbers in dictionary

// Step 3
//
// Rewrite 'if' statement to remove unnecessary parts
// Add variable to write incremented dictionary

'use strict'

let incrementNumbers = (initialDictionary) => {
  const finalDictionary = {...initialDictionary};
  for (const key in initialDictionary) {
    if (typeof initialDictionary[key] === 'number') {
      initialDictionary[key] = initialDictionary[key] + 1;
    }
  }
  return initialDictionary;
};

module.exports = incrementNumbers;
