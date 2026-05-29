// Pattern 18 n = 5
//    E
//    D E
//    C D E
//    B C D E
//    A B C D E

function pattern18(n) {
  for (let i = n; i >= 1; i--) {
    let str = "";

    let code = String.fromCharCode(64 + i);

    for (let j = i; j <= n; j++) {
      str += code + " ";
      code = String.fromCharCode(64 + j + 1);
    }
    console.log(str);
  }
}
pattern18(5);
