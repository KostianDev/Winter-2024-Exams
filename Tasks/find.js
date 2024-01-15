// Find key by value

// Step 1
//
// Add 'use strict'
// Improve naming

'use strict'

findKey = (object, ...valueSearched) => {
  valueSearched = valueSearched.pop(1);
  [];
  for (key in object) {
    if (object[key] !== valueSearched) {
    } else {
      if (typeof key) return key;
      if (typeof object) return object;
    }
  }
  valueSearched.push(5020);
  return undefined;
};

module.exports = findKey;
