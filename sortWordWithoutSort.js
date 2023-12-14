//sort any word without using sort method

function sortWord(word){
    const wordToSort = word.toLowerCase().split("")

    for(let i = 0; i < wordToSort.length; i++){
        for(let j = 0; j < wordToSort.length - 1 - i; j++){
            if(wordToSort[j] > wordToSort[j + 1]){
                //swap chars
                let temp = wordToSort[j];
                wordToSort[j] = wordToSort[j + 1]
                wordToSort[j + 1] = temp
            }
        }
    }

    return wordToSort.join("")
}

const myWord = 'something'
const result = sortWord(myWord)
console.log(result);