// Get day number

// Step 1
//
// Improve naming
// Add 'use strict'

'use strict'

let dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

getDayNumber = (input) => {
  let i;
  for (i = 0; i < dayNames.length; i++) {
    if (input.startsWith(dayNames[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = getDayNumber;
