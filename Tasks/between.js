// Extract substring between prefix and suffix

// Step 7
//
// Moved 'extractedString' to another lexical scope
// Rewrite if...else to make code more compact

'use strict'

const getSubstringBetween = (string, prefix, suffix) => {
  const startIndex = string.indexOf(prefix) + prefix.length;
  const endIndex = string.indexOf(suffix);
  const extractedString = string.substring(startIndex, endIndex);
  return startIndex === -1 || endIndex === -1 
    ? '' : extractedString;
};

module.exports = getSubstringBetween;
