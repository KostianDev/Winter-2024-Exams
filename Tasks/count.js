// Sum all number values in dict

// Step 1
//
// Remove unneeded code
// Add 'use strict'

'use strict'

count = (obj) => {
  sum = 0;
  keys = Object.keys(obj);
  keys.forEach((key) => {
    const value = obj[key];
    if (typeof value === 'number') sum += value;
  });
  return sum;
};

module.exports = count;
