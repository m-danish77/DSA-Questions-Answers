// Pattern 13 n = 4
//    1
//    2 3
//    4 5 6
//    7 8 9 10

function pattern13(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      count += 1;
      str += count + " ";
    }
    console.log(str.trim());
  }
}

pattern13(4);
