// Pattern 15 n = 4
//    ABCD
//    ABC
//    AB
//    A

function pattern15(n) {
  for (let i = n; i >= 1; i--) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += String.fromCharCode(64 + j);
    }
    console.log(str);
  }
}
pattern15(4);
