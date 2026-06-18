let find_A_raised_to_power_b = (n, pow) => {
    
  if (pow == 0) return 1 ;  // here i'm returning 1 because any number raised to the power 0 is equals to: 1 SO HERE: when power will become 0 return 1

 return n * find_A_raised_to_power_b(n, pow-1)

};


let val = find_A_raised_to_power_b(5, 3);
console.log(val)



