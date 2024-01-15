// Copy all values from dict except listed

// Step 2
//
// Remove unneeded code
// Add 'const'

'use strict'

const getExceptListed = (incomingObject, ...exceptions) => {
  const keys = Object.keys(incomingObject);
  keys.forEach((key) => {
    if (exceptions.includes(key)) {
      delete incomingObject[key];
    }
  });
  return incomingObject;
};

module.exports = getExceptListed;
