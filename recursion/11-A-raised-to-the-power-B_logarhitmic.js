let pow = (n, p) => {
  if (p == 1) return n;

  let half = Math.trunc(p / 2); // Half of the power like 4/2 => 2            but if the power is odd then remove decimal value

  let halfPow = pow(n, half);

  if (p % 2 == 0) {
    return halfPow * halfPow;
  } else {
    return halfPow * halfPow * n;
  }
};

console.log(pow(2, 5));

// 2 rp 8 => 2 rp 4 * 2 rp 4
// 2 rp 4 => 2 rp 2 * 2 rp 2
// 2 rp 2 => 2 rp 1 * 2 rp 1
