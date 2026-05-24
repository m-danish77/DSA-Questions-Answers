// Pattern 12 n = 4
//    1      1
//    12    21
//    123  321
//    12344321

function pattern12(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += j;
    }

    for (let k = n * 2 - 1; k >= i * 2; k--) {
      str += " ";
    }

    for (let l = i; l >= 1; l--) {
      str += l;
    }
    console.log(str);
  }
}

pattern12(4);
