let str = "The car is big";

//Time: O(N square)
//Space: O(1)
function rotateEachWordInStr(str) {
  let arr = str.split(" ");
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    for (let j = curr.length - 1; j >= 0; j--) {
      res += curr[j];
    }
    res += " ";
  }
  return res;
}

console.log(rotateEachWordInStr(str)); // OUTPUT--> ehT rac si gib
