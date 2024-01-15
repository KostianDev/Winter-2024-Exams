// Delete listed keys from dictionary

// Step 4
//
// Create another object not to mutate initial one
// Change object modified to 'finalDictionary'

'use strict'

const removeKeys = (initialDictionary, ...keysToRemove) => {
  const finalDictionary = {...initialDictionary};
  for (const key of keysToRemove) {
        delete finalDictionary[key];
    }
  return finalDictionary;
};

module.exports = removeKeys;
