//Write a program to find the most frequent item of an array.

function findMostFreqItem(arr){
    let frequency = {} //use to count the frequencies of all item
    let maxFrequency = 0; //count of the item which has most frequencies
    let mostFrequentItem = null; //item which has most frequencies

    for(let i = 0; i < arr.length; i++){
        let item = arr[i]
        frequency[item] = (frequency[item] || 0) + 1
        if(frequency[item] > maxFrequency){
            maxFrequency = frequency[item]
            mostFrequentItem = item
        }
    }
    return mostFrequentItem
}

let arr = [2, 1, 2, 3, 4, 3, 8, 4, 1,  4, 2, 8]
let res = findMostFreqItem(arr)
console.log(`The most frequent item is: ${res}`)