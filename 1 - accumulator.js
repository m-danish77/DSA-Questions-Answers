function accumulator(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
const time1 = performance.now();
console.log(accumulator(1000000000));
const time2 = performance.now();

console.log(`Time Elapsed: ${(time2 - time1) / 1000} in seconds`);
