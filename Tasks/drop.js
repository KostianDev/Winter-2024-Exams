// Delete listed keys from dictionary

// Step 3
//
// Replace loop with for...of
// Change 'let' to const

'use strict'

const removeKeys = (initialDictionary, ...keysToRemove) => {
  const keysArray = Object.keys(initialDictionary);
  for (const key of keysArray) {
      if (keysToRemove.includes(key)) {
        delete initialDictionary[key];
      }
    }
  return initialDictionary;
};

module.exports = removeKeys;
