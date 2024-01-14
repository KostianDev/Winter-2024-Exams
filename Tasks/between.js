// Extract substring between prefix and suffix

// Step 2
//
// Remove unneeded 'if' statement
// Improve naming

'use strict'

const getSubstringBetween = (string, prefix, suffix) => {
  let startIndex = string.indexOf(prefix);
  if (startIndex === -1) return '';
  else {
    const endIndex = startIndex + prefix.length;
    string = string.substring(endIndex);
      startIndex = string.indexOf(suffix);
      if (startIndex === -1) {
        return '';
      } else {
        string = string.substring(0, startIndex);
      }
  }
  return string;
};

module.exports = getSubstringBetween;
