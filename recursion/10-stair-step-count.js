let findStep=(n)=>{
    if(n==1 ) return 1
    if(n==2 ) return 2
    return findStep(n-1)+findStep(n-2)
}

let steps = findStep(2)
console.log(steps)





// ========================================
// ============ FOR 3 STEPS ===============
// ========================================


// let findStep=(n)=>{
//         if(n==0 ) return 1

//     if(n<0) return 0
//     return findStep(n-1)+findStep(n-2)+findStep(n-3)
// }

// let steps = findStep(4)
// console.log(steps)