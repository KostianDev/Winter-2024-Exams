// Increment all numbers in dictionary

// Step 1
//
// Add 'use strict'
// Improve naming

'use strict'

let incrementNumbers = (initialDictionary, ...rest_variables) => {
  for (key in initialDictionary) {
    if ((typeof initialDictionary[key]).charAt(0).toUpperCase() === 'N') {
      initialDictionary[key] = initialDictionary[key] + 1;
    }
  }
  return initialDictionary;
};

module.exports = incrementNumbers;
