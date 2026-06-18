let sumOfN_numbers=(n)=>{
    if(n==1) return 1
    return n+sumOfN_numbers(n-1)
}

let sum = sumOfN_numbers(3)
console.log(sum)