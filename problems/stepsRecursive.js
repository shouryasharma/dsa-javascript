// # _ _
// # # _
// # # #

function steps(n, row = 0, step = "") {
  if (row === n) return;

  if (step.length === n) {
    console.log(step);
    return steps(n, row + 1);
  }

  if (step.length <= row) {
    step += "#";
  } else {
    step += " ";
  }

  steps(n, row, step);
}

steps(3);
