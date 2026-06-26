const reverse = (arr, si, ei) => {
  while (si < ei) {
    let temp = arr[si];
    arr[si] = arr[ei];
    arr[ei] = temp;

    si++;
    ei--;
  }
};

let arr = [1, 2, 3, 4, 5, 6,];
let k = 3;


reverse(arr, 0, arr.length - 1);
reverse(arr, 0, k-1);
reverse(arr, k, arr.length-1);



console.log(arr);



/*
==============================
Question: Rotate Array by K (Right Rotation)
==============================

Problem:
Ek array aur ek number k diya hai.
Array ko right side me k positions rotate karna hai.

Example:
Input:
[1,2,3,4,5,6]
k = 3

Output:
[4,5,6,1,2,3]

------------------------------
Approach (Reverse Method)
------------------------------

Step 1: Pure array ko reverse karo.
[1,2,3,4,5,6]
↓
[6,5,4,3,2,1]

Step 2: First k elements ko reverse karo.
[6,5,4,3,2,1]
↓
[4,5,6,3,2,1]

Step 3: Remaining elements ko reverse karo.
[4,5,6,3,2,1]
↓
[4,5,6,1,2,3]

------------------------------
Dry Run
------------------------------

Original:
1 2 3 4 5 6

After Full Reverse:
6 5 4 3 2 1

After Reverse First 3:
4 5 6 3 2 1

After Reverse Remaining:
4 5 6 1 2 3

------------------------------
Time Complexity: O(n)
Space Complexity: O(1)

Reason:
Array ko in-place reverse kiya gaya hai,
isliye extra array use nahi hua.
*/