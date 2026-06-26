let arr =[5,3,6,1,8,4,3]


let min = arr[0]


for(let i=0;i<arr.length;i++){
    if(arr[i]<min){
        min = arr[i]
    }
}

console.log("minimum element is ",min)