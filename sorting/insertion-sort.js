let arr = [4,5,3,2,1]

let swap = (arr,i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

for (let i = 1; i < arr.length; i++) {
    let current = i
    while( current>0 && arr[current-1]>arr[current] ){
        swap(arr,current,current-1)
        current--
    }
}

console.log(arr)