// Get month number

// Step 3
//
// Change loop to for...of
// Remove unneeded string

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
  for (const month of MONTHS_NAMES) {
    if (lowercaseInput.startsWith(MONTHS_NAMES[i])) return i + 1;
  }
  return -1;
};

module.exports = getMonthNumber;
