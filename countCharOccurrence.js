function countCharOccurrence(str) {
  let myObj = {};

  // .toLowerCase() converts all the characters to lowercase so the upper case chars not count separately
  let newStr = str.toLowerCase();
  for (let i = 0; i <= newStr.length - 1; i++) {
    if (!myObj[newStr[i]]) {
      myObj[newStr[i]] = 0;
    }
    myObj[newStr[i]]++;
  }
  return myObj;
}

const myStr = "My name is Abhishek Kumar and I am a Web Developer";
console.log(countCharOccurrence(myStr));

// count the number of occurrences of a character in a string using map
function countCharWithMap(str) {
  let map = new Map();
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (map.has(char)) {
      let value = map.get(char);
      map.set(char, value + 1);
    } else {
      map.set(char, 1);
    }
  }
  return map;
}

const myStr2 = "how to count number of occurrences of a character in a string with map in javascript";
console.log(countCharWithMap(myStr2));
