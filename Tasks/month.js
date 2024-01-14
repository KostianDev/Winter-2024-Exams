// Get month number

// Step 1
//
// Improve naming
// add 'use strict'

'use strict'

MONTHS_NAMES = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

getMonthNumber = (input) => {
  arrayLength = MONTHS_NAMES.length;
  for (let i = 0; i < arrayLength; i++) {
    if (input.toLowerCase().startsWith(MONTHS_NAMES[i])) return i + 1;
  }
  return -1;
};

module.exports = getMonthNumber;
