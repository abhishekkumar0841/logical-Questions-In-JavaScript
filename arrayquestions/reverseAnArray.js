function reverseArray(arr){
    let len = arr.length;
    let reversedArr = []

    for(let i = len - 1; i >= 0; i--){
        reversedArr.push(arr[i])
    }

    return reversedArr
}

let arr = ['first', 'second', 'third', 1, 2, 3]
const reversed = reverseArray(arr)
console.log(reversed);