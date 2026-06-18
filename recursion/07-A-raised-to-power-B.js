let find_A_raised_to_power_b = (n, pow, total = 1) => {
  if (pow == 0) return total;

 return find_A_raised_to_power_b(n, pow - 1, total*n);
};


let val = find_A_raised_to_power_b(5, 3);
console.log(val)



