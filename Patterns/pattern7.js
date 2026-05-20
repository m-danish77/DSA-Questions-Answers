// Pattern 7  n = 3
//     *
//    ***
//   *****

function pattern7(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";

    // Add spaces only on left side (spaces addition require only for left side)
    for (let j = 1; j <= n - i; j++) {
      str += " ";
    }

    // Adding Odd number of *
    for (let k = 1; k <= 2 * i - 1; k++) {
      str += "*";
    }
    console.log(str);
  }
}

pattern7(3);
