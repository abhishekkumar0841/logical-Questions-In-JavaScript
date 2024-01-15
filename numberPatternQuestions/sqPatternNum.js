//Enter side length: 4
// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// 13 14 15 16

function printSqPatternNum(num) {
  let counter = 1;

  for (let i = 1; i <= num; i++) {
    let str = "";
    for (let j = 1; j <= num; j++) {
      str += counter + " ";
      counter++;
    }
    console.log(str);
  }
}

printSqPatternNum(4);
