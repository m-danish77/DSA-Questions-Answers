/*

Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)

*/

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let counter = {};

  for (let num of arr1) {
    let square = num ** 2;
    counter[square] = (counter[square] || 0) + 1;
  }

  for (let num of arr2) {
    if (!counter[num]) {
      return false;
    }
    counter[num]--;
  }
  return true;
}

console.log(same([1,2,3], [4,1,9]))
console.log(same([1,2,3,4], [4,1,9,15]))
