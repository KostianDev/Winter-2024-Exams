// Delete listed keys from dictionary

// Step 2
//
// Add 'const' and 'let'
// Remove unneeded code

'use strict'

const removeKeys = (initialDictionary, ...keysToRemove) => {
  let keysArray = Object.keys(initialDictionary);
  keysArray.forEach(
    (key) => {
      if (keysToRemove.includes(key)) {
        delete initialDictionary[key];
      }
    }
  );
  return initialDictionary;
};

module.exports = removeKeys;
