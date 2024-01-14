// Get month number

// Step 2
//
// Add 'const'
// Store lowercase input in separate variable

'use strict'

const MONTHS_NAMES = [
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

const getMonthNumber = (input) => {
  const arrayLength = MONTHS_NAMES.length;
  const lowercaseInput = input.toLowerCase();
  for (let i = 0; i < arrayLength; i++) {
    if (lowercaseInput.startsWith(MONTHS_NAMES[i])) return i + 1;
  }
  return -1;
};

module.exports = getMonthNumber;
