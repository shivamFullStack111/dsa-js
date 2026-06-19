let findPaths = (rows, cols) => {
  if (rows == 1 && cols == 1) return 1;

  let rightWays = 0;
  let downWays = 0;

  if (rows == 1) {
    rightWays += findPaths(rows, cols - 1);
  } else if (cols == 1) {
    downWays += findPaths(rows - 1, cols);
  } else {
    rightWays += findPaths(rows, cols - 1);
    downWays += findPaths(rows - 1, cols);
  }

  return rightWays+downWays
};

console.log(findPaths(1,2));
