// Get month number

// Step 5
//
// Remove loop and 'return'
// Use '.findIndex' to find index of month needed

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
  const result = MONTHS_NAMES.findIndex(month => lowercaseInput.startsWith(month));
};

module.exports = getMonthNumber;
