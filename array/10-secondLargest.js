let arr = [2, 1, 3];

let largest = Number.MIN_SAFE_INTEGER;
let secondLargest = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < arr.length; i++) {

  if(arr[i]>largest){
    secondLargest = largest
    largest=arr[i]
  } else if (arr[i]>secondLargest && arr[i]<largest){
    secondLargest = arr[i]
  }
  
}

console.log("Largest ", largest);
console.log("Second Largest", secondLargest);
