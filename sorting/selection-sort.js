let arr = [6, 5, 4, 3, 2, 1, 9, 7, 8];

let swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

for (let i = 0; i < arr.length - 1; i++) {
  let minValIndex = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[minValIndex]) {
      minValIndex = j;
    }
  }
  swap(arr, i, minValIndex);
}

console.log(arr);
