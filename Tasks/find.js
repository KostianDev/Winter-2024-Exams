// Find key by value

// Step 4
//
// Remove unneeded code
// Make 'if' statement more readable, remove unneeded brackets

'use strict'

const findKey = (object, valueSearched) => {
  for (const key in object) {
    if (object[key] === valueSearched) return key;
  }
};

module.exports = findKey;
