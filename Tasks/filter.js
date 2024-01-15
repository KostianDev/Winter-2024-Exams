// Filter array by type name

// Step 4
//
// Changed condition to opposite
// Now return 'filteredArray' to keep original Array unchanged

'use strict'

const arrayFilter = (initialArray, typeName) => {
  const filteredArray = [];
  for (const element of initialArray) {
    if (typeof element === typeName) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
};

module.exports = arrayFilter;
