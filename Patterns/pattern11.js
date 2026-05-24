// Pattern 11 n = 5
//    1
//    0 1
//    1 0 1
//    0 1 0 1
//    1 0 1 0 1

function pattern11(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    let startValue = i % 2 == 1 ? 1 : 0;

    for (let j = 1; j <= i; j++) {
      if (j % 2 == 1) {
        str += startValue + " ";
      } else {
        // Flipping 1 to 0 or 0 to 1
        str += 1 - startValue + " ";
      }
    }
    console.log(str);
  }
}

pattern11(5);
