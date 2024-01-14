// Extract substring between prefix and suffix

// Step 1
//
// Add 'use strict'
// Improve naming

'use strict'

getSubstringBetween = (string, prefix, suffix) => {
  i = string.indexOf(prefix);
  if (i === -1) return '';
  else {
    k = i + prefix.length;
    string = string.substring(k);
    if (suffix) {
      i = string.indexOf(suffix);
      if (i === -1) {
        return '';
      } else {
        string = string.substring(0, i);
      }
    }
  }
  return string;
};

module.exports = getSubstringBetween;
