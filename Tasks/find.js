// Find key by value

// Step 3
//
// Rewrite condition to opposite
// Remove unneeded code
// Transfer code from 'else' to 'if'

'use strict'

const findKey = (object, valueSearched) => {
  for (const key in object) {
    if (object[key] === valueSearched) {
      if (typeof key) return key;
    }
  }
};

module.exports = findKey;
