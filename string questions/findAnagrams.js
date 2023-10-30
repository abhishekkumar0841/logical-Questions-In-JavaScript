// Write a program to find all the anagrams of a word in a given list of words.

//function to check areAnagrams or not
function areAnagrams(word1, word2){
    return word1.split("").sort().join("") === word2.split("").sort().join("")
}

//function to find anagrams from given list
function findAnagrams(wordToCheck, listOfWords){
    let anagrams = []
    for(let i = 0; i < listOfWords.length; i++){
        let currWord = listOfWords[i]
        if(areAnagrams(wordToCheck, currWord)){
            anagrams.push(currWord)
        }
    }
    return anagrams;
}

let inputWord = 'listen'
let listOfWords = ["list", "silent", "enlist", "hello", "listen"]

let anagrams = findAnagrams(inputWord, listOfWords)
console.log(`The anagrams of input word ${inputWord}--> ${anagrams} `)