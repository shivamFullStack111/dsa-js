let arr =[5,3,6,1,8,4,3]


let max = arr[0]


for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max = arr[i]
    }
}

console.log("Maximum element is ",max)