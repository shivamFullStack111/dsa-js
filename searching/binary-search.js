let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let element = 1; // element to find

// Step 1 Sort array

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - i; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

// Step 2 implent searching

let binarySearch = () => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    mid = Math.trunc((start + end) / 2);
    console.log(mid);

    if (arr[mid] == element) return mid;

    if ( element >arr[mid] ) {
      start = mid +1;
    } else {
      end = mid -1;
    }
  }
};

console.log(`Element find on index: ${binarySearch()}`);
