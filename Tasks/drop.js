// Delete listed keys from dictionary

// Step 3
//
// Remove unneeded code
// Change array iterated

'use strict'

const removeKeys = (initialDictionary, ...keysToRemove) => {
  for (const key of keysToRemove) {
        delete initialDictionary[key];
    }
  return initialDictionary;
};

module.exports = removeKeys;
