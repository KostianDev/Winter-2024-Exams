// Get day number

// Step 3
//
// Change loop to 'Array.findIndex'

'use strict'

const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getDayNumber = (input) => {
  const result = dayNames.findIndex((day) => input.startsWith(day.toLowerCase()))
    if (input.startsWith(dayNames[i].toLowerCase())) {
      return i + 1;
    }
  return -1;
};

module.exports = getDayNumber;
