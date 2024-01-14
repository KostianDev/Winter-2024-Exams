// Get day number

// Step 2
//
// Add 'const'
// Change from 'let' to 'const'
// Remove unneeded code

'use strict'

const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getDayNumber = (input) => {
  for (let i = 0; i < dayNames.length; i++) {
    if (input.startsWith(dayNames[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = getDayNumber;
