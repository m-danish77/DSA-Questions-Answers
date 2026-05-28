// Pattern 17 n = 4
//       A
//      ABA
//     ABCBA
//    ABCDCBA

function pattern17(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";

    for (let j = 1; j <= n - i; j++) {
      str += " ";
    }

    for (let k = 1; k <= i; k++) {
      str += String.fromCharCode(64 + k);
    }

    for (let l = i - 1; l >= 1; l--) {
      str += String.fromCharCode(64 + l);
    }
    console.log(str);
  }
}
pattern17(4);
