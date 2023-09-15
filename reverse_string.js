// Q. reverse string using inbuilt methods 
function revStr(str){
    let rev = str.split("").reverse().join("")
    return rev;
}
// console.log(revStr("My name is Abhishek"))

// Q. reverse string without using inbuilt methods 
function revString(str){
    let i, newStr = "";
    for(i = str.length - 1; i >= 0; i--){
        newStr += str[i]
    }
    return newStr;
}
console.log(revString("I am a web developer"))

