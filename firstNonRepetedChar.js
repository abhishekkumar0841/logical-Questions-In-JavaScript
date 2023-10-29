//find the first non repeated character in string

function findFirstChar(str) {
  let charOccurrences = {};
  let i, j;
  for (i = 0; i < str.length; i++) {
    let char = str[i];
    charOccurrences[char] = (charOccurrences[char] || 0) + 1;
  }
  //if here i return charOccurrences then i got the count of all chars
  // return charOccurrences

  //this loop for comparing the chars and return the 1st one which is unique
  for (j = 0; j < str.length; j++) {
    let currentChar = str[j];
    if (charOccurrences[currentChar] === 1) {
      return currentChar;
    }
  }

  //returning null if there are no non-repeated chars
  return null;
}

let sentence = "find the first non repeated character in string";
console.log(findFirstChar(sentence));
