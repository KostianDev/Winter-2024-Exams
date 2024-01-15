// Find key by value

// Step 2
//
// Remove unneeded code
// Add 'const'

'use strict'

const findKey = (object, ...valueSearched) => {
  valueSearched = valueSearched.pop();
  for (const key in object) {
    if (object[key] !== valueSearched) {
    } else {
      if (typeof key) return key;
    }
  }
};

module.exports = findKey;
