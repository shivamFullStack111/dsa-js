
let arr =[1,2,3,2,1]


let i = 0 
let j  = arr.length-1 

let mid  = Math.trunc(arr.length/2)

let isPalindrome = true

while(i!==mid){

    if(arr[i]!==arr[j]){
        isPalindrome=false
        break
    }

    j--
    i++
}

if(isPalindrome) console.log("Palindrome")
else console.log("Not Palindrome")
