// Pattern 14 n = 4
//    A
//    AB
//    ABC
//    ABCD

function pattern14(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += String.fromCharCode(64 + j);
    }
    console.log(str);
  }
}
pattern14(4);
