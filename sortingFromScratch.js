//Write a function which takes an array elements and return sorted arr in increasing order, without using any built in method 
function sortingFunc(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - 1; j++){
            if(arr[j] > arr[j +1]){
                let temp = arr[j]
                arr[j] = arr[j +1]
                arr[j + 1] = temp;
            }  
        }
    }
    return arr;
}

const myArr = [3,1,14,71,9]
console.log(sortingFunc(myArr));