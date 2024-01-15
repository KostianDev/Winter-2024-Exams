// Copy all values from dict except listed

// Step 4
//
// Clone original dictionary
// Replace dictionary changed with 'finalObject'

'use strict'

const getExceptListed = (incomingObject, ...exceptions) => {
  const finalObject = {...incomingObject}
  for (const key of exceptions) {
    delete finalObject[key];
  }
  return finalObject;
};

module.exports = getExceptListed;
