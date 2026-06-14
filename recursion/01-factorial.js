let factorial = (n) => {

    if (n == 1 || n == 0) return 1;

    return n * factorial(n - 1);
}

let fact = factorial(5);

console.log(fact);



/*

Topic: Recursion (Factorial)

Recursion ka matlab hota hai jab koi function khud ko hi call karta hai.

Is code ka kaam kisi number ka factorial nikalna hai.

Factorial Example:

5! = 5 × 4 × 3 × 2 × 1 = 120

--------------------------------------------------

Code Explanation

1) Base Case

if (n == 1 || n == 0) return 1;

Ye Base Case hai.

Base Case recursion ko rokne ke liye lagaya jata hai.

Agar n ki value 0 ya 1 ho jaye to function 1 return kar dega aur recursion yahin ruk jayegi.

--------------------------------------------------

2) Recursive Case

return n * factorial(n - 1);

Yaha function khud ko call kar raha hai.

Current number ko (n - 1) ke factorial ke saath multiply kiya ja raha hai.

--------------------------------------------------

Dry Run

factorial(5)

Step 1:
5 * factorial(4)

Step 2:
5 * 4 * factorial(3)

Step 3:
5 * 4 * 3 * factorial(2)

Step 4:
5 * 4 * 3 * 2 * factorial(1)

Step 5:
factorial(1)

Base Case mil gaya.

return 1

Ab values wapas aayengi:

2 * 1 = 2

3 * 2 = 6

4 * 6 = 24

5 * 24 = 120

Final Output:

120

--------------------------------------------------

Call Stack

factorial(5)
    ↓
factorial(4)
    ↓
factorial(3)
    ↓
factorial(2)
    ↓
factorial(1)

Base Case

Ab return hoga:

factorial(1) = 1
↑
factorial(2) = 2
↑
factorial(3) = 6
↑
factorial(4) = 24
↑
factorial(5) = 120

--------------------------------------------------

Time Complexity: O(n)

Kyuki function n baar call hota hai.

Space Complexity: O(n)

Kyuki har recursive call call stack me store hoti hai.

--------------------------------------------------

Important Points

• Base Case → n == 0 || n == 1
• Recursive Case → n * factorial(n - 1)
• Recursion → Function khud ko call karta hai
• Output → 120
*/