/*

Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates('a', 'b', 'c', 'a') // true

*/

function areThereDuplicates(...numbers) {
  let obj = {};
  for (let num of numbers) {
    obj[num] = (obj[num] || 0) + 1;
    if (obj[num] > 1) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3, 3))
