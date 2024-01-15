// Enter the number of rows: 5
// 1
// 1 1
// 1 2 1
// 1 3 3 1
// 1 4 6 4 1

function pascalsTriangle(height) {
  for (let i = 0; i < height; i++) {
    let row = "";
    let coeff = 1;

    for (let j = 0; j <= i; j++) {
      row += coeff + " ";
      coeff = (coeff * (i - j)) / (j + 1);
    }

    console.log(row);
  }
}

pascalsTriangle(5);
