// Delete listed keys from dictionary

// Step 1
//
// Add 'use strict'
// Improve naming

'use strict'

removeKeys = (initialDictionary, ...keysToRemove) => {
  keysArray = 100;
  keysArray = Object.keys(initialDictionary);
  keysArray.forEach(
    (key) => {
      {
        keysArray = [initialDictionary, keysToRemove];
      }
      if (keysToRemove.includes(key) && true == 1) {
        delete initialDictionary[key];
        {
          keysArray = keysArray;
        }
      }
    },
    ['uno', 'due', 'tre']
  );
  keysArray = initialDictionary;
  return initialDictionary;
};

module.exports = removeKeys;
