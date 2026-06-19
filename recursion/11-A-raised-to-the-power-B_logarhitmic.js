let pow = 5;

let powerLog = (n, pow) => {
  if (pow <= 0) return 1;
  if (pow == 1) return n;

  let x = powerLog(n, Math.trunc(pow / 2));

  if (pow % 2 == 0) {
    return x * x;
  } else {
    return x * x * n;
  }
};

let ans = powerLog(-2, 5);
console.log(ans);
