// Extract substring between prefix and suffix

// Step 4
//
// Changed 'startIndex' and 'endIndex'
// Changed 'startIndex' declaration to 'const'

'use strict'

const getSubstringBetween = (string, prefix, suffix) => {
  const startIndex = string.indexOf(prefix) + prefix.length;
  const endIndex = string.indexOf(suffix);
  if (startIndex === -1 || endIndex === -1) return '';
  else {
    string = string.substring(endIndex);
    startIndex = string.indexOf(suffix);
  }
  return string;
};

module.exports = getSubstringBetween;
