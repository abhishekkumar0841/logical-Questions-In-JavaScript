// removing duplicates using Set
const duplicateArr = [2, 7, 8, 9, 0, 4, 3, 2, 4, 3, 9, 0, 1, 2];

function removeDuplicates(arr) {
  const uniqueEl = new Set(arr);
  return [...uniqueEl];
}

console.log(removeDuplicates(duplicateArr));

// removing duplicates using indexOf method
const duplicateArr2 = [2, 7, 8, 9, 0, 4, 3, 2, 4, 3, 9, 0, 1, 2];

function removeDuplicates2(arr) {
  const expArr = [];
  let arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    if (expArr.indexOf(arr[i]) === -1) {
      expArr.push(arr[i]);
    }
  }
  return expArr;
}

console.log(removeDuplicates2(duplicateArr2));

// removing duplicates without using any in built methods
const duplicateArr3 = [2, 7, 8, 9, 0, 4, 3, 2, 4, 3, 9, 0, 1, 2];

function removeDuplicates3(arr) {
    let uniqueArr = [];
    let arrLength = arr.length;
    for(let i = 0; i < arrLength; i++){
        let isDuplicate = false;

        for(let j = 0; j < arrLength; j++){
            if(arr[i] === uniqueArr[j]){
                isDuplicate = true;
                break;
            }
        }

        if(!isDuplicate){
            uniqueArr.push(arr[i])
        }

    }
    return uniqueArr;
}

console.log(removeDuplicates3(duplicateArr3));

