// Pattern 10 n = 3
//    *
//    **
//    ***
//    **
//    *

function pattern10(n) {
  // Assending *
  for (let i = 1; i <= n; i++) {
    let str = "";

    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    console.log(str);
  }

  // Descending *
  for (let i = n - 1; i >= 1; i--) {
    let str = "";

    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    console.log(str);
  }
}

pattern10(3);
