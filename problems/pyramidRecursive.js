// _ _ # _ _
// _ # # # _
// # # # # #

function pyramid(n, row = 0, level = "") {
  if (n === row) return;

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const mid = Math.floor((2 * n - 1) / 2);

  if (level.length < mid - row || level.length > mid + row) {
    level += " ";
  } else {
    level += "#";
  }

  pyramid(n, row, level);
}

pyramid(2);
