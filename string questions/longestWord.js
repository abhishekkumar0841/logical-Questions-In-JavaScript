// Write a function that finds the longest word in a sentence.
function findLogWord(sent){
    let longestWord = ''
    let lenOfLongestWord = 0;
    let words = sent.split(" ")
    for(let i = 0; i < words.length; i++){
        let currWord = words[i]
        if(currWord.length > longestWord.length){
            longestWord = currWord
            lenOfLongestWord = longestWord.length
        }
    }
    return `Longest word is: ${longestWord} and it is of ${lenOfLongestWord} chars`
}

let sentence = 'Write a function that finds the longest word in a sentence'
let res = findLogWord(sentence)
console.log(res)