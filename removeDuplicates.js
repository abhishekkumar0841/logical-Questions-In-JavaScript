// removing duplicates using Set 
const duplicateArr = [2, 7, 8, 9, 0, 4, 3, 2, 4, 3, 9, 0, 1, 2];

function removeDuplicates(arr){
    const uniqueEl = new Set(arr);
    return uniqueEl;
}

console.log(removeDuplicates(duplicateArr))