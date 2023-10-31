//Write a function to find the index of the first occurrence of a character in a string.

// ***********built in method*************//
function findIndex(str, char){
    return str.indexOf(char)
}

let string = 'Write a function to find the index of the first occurrence of a character in a string'

let userInput = 'a'

let res = findIndex(string, userInput)

console.log(res)

// ***********traditional method*************//

function findIndex2(str, char){
    for(let i = 0; i < str.length; i++){
        let currChar = str[i]
        if(currChar === char){
            return i
        }
    }
}

let string2 = 'Write a function to find the index of the first occurrence of a character in a string'

let userInput2 = 'f'

let res2 = findIndex2(string, userInput)
console.log(res2)