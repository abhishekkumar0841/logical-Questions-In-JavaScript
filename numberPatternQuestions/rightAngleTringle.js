// Enter height: 4
// 1
// 2 3
// 4 5 6
// 7 8 9 10

function rightAngleTriangle(height) {
  let count = 1;
  for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 1; j <= height; j++) {
      if (j <= i) {
        row += count + " ";
        count++;
      }else{
        row += " "
      }
    }
    console.log(row);
  }
}

rightAngleTriangle(4);
