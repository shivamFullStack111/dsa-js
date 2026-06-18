

function fibonacci(n) {
  // Base cases: the first two Fibonacci numbers are 0 and 1
  if (n <= 0) return 0;
  if (n === 1) return 1;
  
  // Recursive call
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(-1)); // Output: 13
