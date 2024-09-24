// [1, 2, 3]
// [8, 9, 4]
// [7, 6, 5]

function matrix(n) {
  const results = [];

  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  // number which we're going to put into the array/matrix
  let number = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    // top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = number;
      number++;
    }
    startRow++;

    // right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = number;
      number++;
    }
    endColumn--;

    // bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = number;
      number++;
    }
    endRow--;

    // start column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = number;
      number++;
    }
    startColumn++;
  }

  console.log(results);
}

matrix(2);
matrix(3);
matrix(4);

