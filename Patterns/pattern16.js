// Pattern 16 n = 4
//    A
//    BB
//    CCC
//    DDDD

function pattern16(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += String.fromCharCode(64 + i);
    }
    console.log(str);
  }
}
pattern16(4);
