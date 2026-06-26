let arr =[1,2,3,4,5,6]


let start = 0 
let end  = arr.length-1 

let mid  = Math.trunc(arr.length/2)

while(start!==mid){

    let temp = arr[start]
    arr[start]=arr[end]
    arr[end]=temp

    end--
    start++
}

console.log(arr)