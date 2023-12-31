// 9. Java Program to Add Two Matrices
function sumOf2Matrices(matrix1, matrix2) {
  if (matrix1.length !== matrix2.length) {
    console.log(
      "sum is not possible!, make sure the length of the matrices is same"
    );
    return null;
  }

  //checking the length of inner elements of matrix is same or not
  for (let i = 0; i < matrix1.length; i++) {
    if (matrix1[i].length !== matrix2[i].length) {
      console.log(
        "Sum not possible, make sure the length of the elements of the matrices is same"
      );
      return null;
    }
  }

  let matrixSum = [];

  for (let i = 0; i < matrix1.length; i++) {
    matrixSum[i] = [];

    for (let j = 0; j < matrix1[i].length; j++) {
      matrixSum[i][j] = matrix1[i][j] + matrix2[i][j];
    }
  }

  return matrixSum;
}

const matrixA = [
  [3, 2, 4],
  [8, 2, 5],
];

const matrixB = [
  [2, 3, 4],
  [8, 8, 8],
];

console.log(sumOf2Matrices(matrixA, matrixB));
