// Filter array by type name

// Step 1
//
// Improve naming
// Add 'use strict'

'use strict'

arrayFilter = (initialArray, typeName) => {
  filteredArray = [];
  for (element of initialArray) {
    elementNumber = initialArray.indexOf(element);
    if (typeof initialArray[elementNumber] !== typeName) {
      filteredArray.unshift(elementNumber);
    }
  }
  for (elementNumber of filteredArray) initialArray.splice(elementNumber, 1);
  return initialArray;
};

module.exports = arrayFilter;
