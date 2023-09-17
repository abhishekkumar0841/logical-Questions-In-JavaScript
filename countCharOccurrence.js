function countCharOccurrence(str) {
  let myObj = {};

  // .toLowerCase() converts all the characters to lowercase so the upper case chars not count separately
  let newStr = str.toLowerCase();
  for (let i = 0; i <= newStr.length - 1; i++) {
    if(!myObj[newStr[i]]){
        myObj[newStr[i]] = 0;
    }
    myObj[newStr[i]]++;
  }
  return myObj;
}

const myStr = "My name is Abhishek Kumar and I am a Web Developer";
console.log(countCharOccurrence(myStr));
