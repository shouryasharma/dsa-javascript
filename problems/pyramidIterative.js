// _ _ # _ _
// _ # # # _
// # # # # #

function pyramid(n) {
  let row = 1;
  while (row <= n) {
    let str = "";
    while (str.length < 2 * n - 1) {
      if (
        str.length > Math.floor((2 * n - 1) / 2) + (row - 1) ||
        str.length < Math.floor((2 * n - 1) / 2) - (row - 1)
      ) {
        str += " ";
      } else {
        str += "#";
      }
    }
    console.log(str);
    row++;
  }
}

pyramid(2);
