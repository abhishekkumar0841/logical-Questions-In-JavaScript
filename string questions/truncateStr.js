// Write a function to truncate a string if it is longer than a specified number of characters.
function truncateString(sent){
    let lenOf = 5
    let arrOfSent = sent.split(" ")
    let truncatedSent = ''
    for(let i = 0; i < arrOfSent.length; i++){
        let currWord = arrOfSent[i]
        if(currWord.length < lenOf){
            truncatedSent += currWord + " "
        }
    }
    return truncatedSent
}

let sentence = 'find first non repeated character in string'
let res = truncateString(sentence)
console.log(res)