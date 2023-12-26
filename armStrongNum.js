// print all armStrong number from 1 to 1000
function findArmStrongNum() {
  for (let i = 1; i <= 1000; i++) {
    let x = i;
    let s = 0;
    while (x !== 0) {
      let lastDigit = x % 10;
      s = s + lastDigit * lastDigit * lastDigit;
      x = Math.floor(x / 10);
    }
    if (s === i) {
      console.log("Arm Strong numbers are:-", i);
    }
  }
}

findArmStrongNum();

function checkArmStrongNum(num) {
  let numStr = num.toString();
  let numLength = numStr.length;

  let totalSum = 0;
  for (let i = 0; i < numLength; i++) {
    let curr = numStr[i];
    let digit = parseInt(curr, 10); //without 10 also works, but it is used for safe calculations
    totalSum += Math.pow(digit, numLength);
  }

  if (totalSum === num) {
    return true;
  }

  return false;
}
console.log(checkArmStrongNum(153));
