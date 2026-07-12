/*

Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false

*/

function sameFrequency(num1, num2) {
  num1 = String(num1);
  num2 = String(num2);
  if (num1.length !== num2.length) {
    return false;
  }

  let obj = {};
  for (let letter of num1) {
    obj[letter] = (obj[letter] || 0) + 1;
  }

  for (let letter of num2) {
    if (!obj[letter]) {
      return false;
    } else {
      obj[letter]--;
    }
  }
  return true;
}

console.log(sameFrequency(1823, 2813)); // true
