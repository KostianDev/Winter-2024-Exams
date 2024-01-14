// Get one random element from an array

// Step 2
//
// Remove redundant variable

'use strict'

const getRandomElement = (inputArray) => {
  return inputArray[Math.floor(Math.random() * inputArray.length)];
};

module.exports = getRandomElement;
