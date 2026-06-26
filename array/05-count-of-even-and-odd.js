let arr =[5,3,6,1,8,4,3]


let evenCount =0
let oddCount =0


for(let i=0;i<arr.length;i++){
  if(arr[i]%2==0){
    evenCount+=1
  }else{
    oddCount+=1
  }
}

console.log("Even Count ",evenCount)
console.log("Odd Count ",oddCount)