//  The Problem Description: LeetCode 1134 – Armstrong Number

//  Given an integer `n`, return `true` if and only if it is an Armstrong number.
//  A k-digit number `n` is an Armstrong number if and only if the k-th power of each digit sums up to `n`.

// #### Example 1:

// Input: `n = 153`
// Output: `true`
// Explanation: `153` is a 3-digit number (k = 3).
// If we raise each digit to the 3rd power and add them up:

// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

// Since the sum equals the original number, it returns `true`.

function ArmstrongNumber(n) {
  let temp = n;
  let sum = 0;
  const numLength = String(n).length;
  while (temp > 0) {
    let lastDigit = temp % 10;
    sum += lastDigit ** numLength;
    temp = (temp / 10) | 0;
  }
  return n === sum;
}

console.log(ArmstrongNumber(153));
