// Filter array by type name

// Step 3
//
// Change from 'elementNumber' to 'element'
// Change from '.unshift' to '.push'

'use strict'

const arrayFilter = (initialArray, typeName) => {
  const filteredArray = [];
  for (const element of initialArray) {
    if (typeof element !== typeName) {
      filteredArray.push(element);
    }
  }
  return initialArray;
};

module.exports = arrayFilter;
