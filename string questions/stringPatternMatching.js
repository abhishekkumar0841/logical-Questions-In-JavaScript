//Write a function to implement string pattern matching (like regular expression matching).

function matchTheString(string, pattern){
    const regex = new RegExp(pattern)
    return regex.test(string)
}

let myPattern = /^[a-z]+[0-9]+$/    //this pattern only match a to z chars(only lower case) with 0 to 9 numbers without spaces
let myString = 'helloAbhishek123'

if(matchTheString(myString, myPattern)){
    console.log("Matched")
}else{
    console.log("Not Matched")
}

