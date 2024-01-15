// Filter array by type name

// Step 2
//
// Add 'const'
// Remove unneeded code

'use strict'

const arrayFilter = (initialArray, typeName) => {
  const filteredArray = [];
  for (const element of initialArray) {
    if (typeof initialArray[elementNumber] !== typeName) {
      filteredArray.unshift(elementNumber);
    }
  }
  return initialArray;
};

module.exports = arrayFilter;
