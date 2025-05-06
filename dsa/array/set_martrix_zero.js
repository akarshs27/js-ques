// Set Matrix Zeroes
// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
// You must do it in place.

// Example 1:
// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

function setMatrixZero(matrix) {
  let zeroPos = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        zeroPos.push([i, j]);
      }
    }
  }

  for (let i = 0; i < zeroPos.length; i++) {
    const [row, column] = zeroPos[i];

    for (let i = 0; i < matrix.length; i++) {
      matrix[i][column] = 0;
    }

    for (let j = 0; j < matrix.length; j++) {
      matrix[row][j] = 0;
    }
  }

  return matrix;
}

// 1 0 1
// 0 0 0
// 1 0 1

console.log(
  setMatrixZero([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
