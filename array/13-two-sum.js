let arr = [1, 4, 3, 6, 10, 7, 9, 8];

let k = 10;

let mySet = new Set();

let getTwoSum = () => {
  for (let i = 0; i < arr.length; i++) {
    let val = k - arr[i];

    if (mySet.has(val)) {
      return [arr[i], val];
    } else {
      mySet.add(arr[i]);
    }
  }
};

console.log(getTwoSum())
