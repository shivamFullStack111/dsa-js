let arr = [2, 1, 3, 4];

let isSorted = true;

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] > arr[i + 1]) {
    isSorted = false;
    break;
  }
}

if (isSorted) console.log("sorted");
else console.log("not sorted");
