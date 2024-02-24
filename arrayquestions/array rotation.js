// Rotate an array of n elements to the right by k steps. For example, given the array [1, 2, 3, 4, 5, 6, 7] and k = 3, the array should be modified to [5, 6, 7, 1, 2, 3, 4].

function arrayRot(arr, k){
    let left = [];
    for(let i = arr.length - k; i <= arr.length - 1; i++){
        left.push(arr[i])
    }

    for(let i = 0; i < arr.length - k; i++){
        left.push(arr[i])
    }

    return left
}

console.log(arrayRot([1, 2, 3, 4, 5, 6, 7], 3));
console.log(arrayRot([1, 2, 3, 4, 5, 6, 7], 5)); 