// Get month number

// Step 6
//
// Add 'return' with condition

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
  const lowercaseInput = input.toLowerCase();
  const result = MONTHS_NAMES.findIndex((month) => lowercaseInput.startsWith(month));
  return result >= 0 ? result + 1 : result;
};

module.exports = getMonthNumber;
