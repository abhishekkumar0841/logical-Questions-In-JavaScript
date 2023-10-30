// Write a function to remove specified characters from a string.

{function removeSpecifiedChars(string) {
    let newString = ''
    for(let i = 0; i < string.length; i++){
        let currChar = string[i]
        if(currChar === 'a' || currChar === 'e' || currChar === 'i' || currChar === 'o' || currChar === 'u'){
            continue
        }
        newString += currChar
    }
  return newString;
}

let string = "Write a function to remove specified characters from a string.";
let res = removeSpecifiedChars(string);
console.log(res);}

// second method to solve this same problem
function removeSpecifiedChars(mainString, charsToRemove){
    let newString = ''
    for(let i = 0; i < mainString.length; i++){
        if(charsToRemove.indexOf(mainString[i]) === -1){
            newString += mainString[i]
        }
    }
    return newString
}

let string = "Write a function to remove specified characters from a string.";
let charsToRemove = 'aeiou'
let res = removeSpecifiedChars(string, charsToRemove);
console.log(res);

