// Get month number

// Step 7
//
// Fix naming

'use strict'

const monthNames = [
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
  const result = monthNames.findIndex((month) => lowercaseInput.startsWith(month));
  return result >= 0 ? result + 1 : result;
};

module.exports = getMonthNumber;
