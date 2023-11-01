//Write a function to perform basic string compression using the counts of repeated characters.

function stringCompression(str){
    let count = 1;
    let compressedString = ''
    let currChar = str[0]

    for(let i = 1; i < str.length; i++){
        if(currChar === str[i]){
            count++
        }else{
            compressedString += currChar + count
            currChar = str[i]
            count = 1
        }
    }
    compressedString += currChar + count
    return compressedString
}

let string = 'Write a function to perform basic string compression using the counts of repeated characters'
let res = stringCompression(string)
console.log(res)