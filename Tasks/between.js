// Extract substring between prefix and suffix

// Step 3
//
// Connected two conditions
// Removed unneeded code

'use strict'

const getSubstringBetween = (string, prefix, suffix) => {
  let startIndex = string.indexOf(prefix);
  if (startIndex === -1 || endIndex === -1) return '';
  else {
    const endIndex = startIndex + prefix.length;
    string = string.substring(endIndex);
    startIndex = string.indexOf(suffix);
  }
  return string;
};

module.exports = getSubstringBetween;
