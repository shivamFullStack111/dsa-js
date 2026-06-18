let findStepMethods=(n)=>{
    if(n==1 ) return 1
    if(n==2 ) return 2
    return findStepMethods(n-1)+findStepMethods(n-2)
}

let steps = findStepMethods(2)
console.log(steps)





// ========================================
// ============ FOR 3 STEPS ===============
// ========================================


// let findStepMethods=(n)=>{
//         if(n==0 ) return 1

//     if(n<0) return 0
//     return findStepMethods(n-1)+findStepMethods(n-2)+findStepMethods(n-3)
// }

// let steps = findStepMethods(4)
// console.log(steps)