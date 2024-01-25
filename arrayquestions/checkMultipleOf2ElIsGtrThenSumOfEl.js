//Array :- Take the array of no. and return true if any two no. can be multiplied so that the answer is greater than the sum of all elements in an array.

function checkMulGreaterThenSum(arrOfNum) {
  let sumOfEl = 0;
  for (let i = 0; i < arrOfNum.length; i++) {
    sumOfEl += arrOfNum[i];
  }

  for (let i = 0; i < arrOfNum.length; i++) {
    let mulOf2El = 0;
    for (let j = i + 1; j < arrOfNum.length; j++) {
      mulOf2El = arrOfNum[i] * arrOfNum[j];
      if (mulOf2El > sumOfEl) {
        return true;
      }
    }
  }

  return false;
}

console.log(checkMulGreaterThenSum([1, 2, 4, 1, 3]));
