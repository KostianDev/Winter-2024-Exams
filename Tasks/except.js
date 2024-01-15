// Copy all values from dict except listed

// Step 3
//
// Replace cycle with for...of
// Remove unneeded code

'use strict'

const getExceptListed = (incomingObject, ...exceptions) => {
  for (const key of exceptions) {
    delete incomingObject[key];
  }
  return incomingObject;
};

module.exports = getExceptListed;
