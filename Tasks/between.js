// Extract substring between prefix and suffix

// Step 6
//
// Added variable to stop changing incoming parameters

'use strict'

const getSubstringBetween = (string, prefix, suffix) => {
  const startIndex = string.indexOf(prefix) + prefix.length;
  const endIndex = string.indexOf(suffix);
  if (startIndex === -1 || endIndex === -1) return '';
  else {
    const extractedString = string.substring(startIndex, endIndex);
  }
  return extractedString;
};

module.exports = getSubstringBetween;
