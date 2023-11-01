//Write a function to perform basic string compression using the counts of repeated characters.

function stringCompression(str) {
  let compressedString = "";
  let count = 1;
  let currentChar = str[0];

  for (let i = 1; i < str.length; i++) {
    if (currentChar === str[i]) {
      count++;
    } else {
      compressedString += currentChar + count;
      count = 1;
      currentChar = str[i];
    }
  }

  compressedString += currentChar + count;
  return compressedString;
}

let string = "Apple dummy";
let res = stringCompression(string);
console.log(res);
