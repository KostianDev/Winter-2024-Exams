// Get one random element from an array

// Step 1
//
// Add 'use strict'
// Improve naming

'use strict'

const getRandomElement = (inputArray) => {
  inputArray = inputArray[Math.floor(Math.random() * inputArray.length)];
  return inputArray;
};

module.exports = getRandomElement;
