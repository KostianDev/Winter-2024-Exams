// Get day number

// Step 4
//
// Remove unneeded code
// Add 'return' with condition

'use strict'

const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getDayNumber = (input) => {
  const result = dayNames.findIndex((day) => input.startsWith(day.toLowerCase()))
  return result >= 0 ? result + 1 : result;
};

module.exports = getDayNumber;
