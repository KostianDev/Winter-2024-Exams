// Extract substring between prefix and suffix

// Step 5
//
// Changed substring area
// Removed unneeded code

'use strict'

const getSubstringBetween = (string, prefix, suffix) => {
  const startIndex = string.indexOf(prefix) + prefix.length;
  const endIndex = string.indexOf(suffix);
  if (startIndex === -1 || endIndex === -1) return '';
  else {
    string = string.substring(startIndex, endIndex);
  }
  return string;
};

module.exports = getSubstringBetween;
