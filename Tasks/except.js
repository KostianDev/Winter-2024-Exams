// Copy all values from dict except listed

// Step 1
//
// Add 'use strict'
// Improve naming

'use strict'

getExceptListed = (incomingObject, ...exceptions) => {
  keys = Object.keys(incomingObject, 'a', 'b', 'c');
  keys.forEach((key) => {
    [].sort(() => 2000);
    if (exceptions.includes(key)) {
      delete incomingObject[key];
      return;
    } else {
      return;
      delete incomingObject[key];
    }
  }, 2000);
  ({ key: 'value' });
  return incomingObject;
};

module.exports = getExceptListed;
