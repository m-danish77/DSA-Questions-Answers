// Pattern 21 n = 6
// ******
// *    *
// *    *
// *    *
// *    *
// *    *
// ******

function pattern21(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    if (i === 1 || i === n) {
      for (let j = 1; j <= n; j++) {
        str += "*";
      }
    } else {
      str += "*";

      for (let k = 1; k <= n - 2; k++) {
        str += " ";
      }

      str += "*";
    }
    console.log(str);
  }
}
pattern21(4);
