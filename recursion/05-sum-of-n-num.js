let sumOfN_numbers = (n, sum=0) => {
  if (n ==0) return sum;

  return sumOfN_numbers(n - 1, sum + n);
};

let sum = sumOfN_numbers(5);
console.log(sum);
