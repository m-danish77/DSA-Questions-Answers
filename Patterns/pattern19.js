// Pattern 19 n = 5
// ★★★★★★★★★★
// ★★★★   ★★★★
// ★★★      ★★★
// ★★         ★★
// ★            ★
// ★            ★
// ★★         ★★
// ★★★      ★★★
// ★★★★   ★★★★
// ★★★★★★★★★★

function pattern19(n) {
  // Upper Part
  for (let i = 1; i <= n; i++) {
    let str = "";

    for (let j = i; j <= n; j++) {
      str += "*";
    }

    // Upper Space part
    for (let k = 1; k <= (i - 1) * 2; k++) {
      str += " ";
    }

    for (let l = i; l <= n; l++) {
      str += "*";
    }
    console.log(str);
  }

  // Lower Part
  for (let i = 1; i <= n; i++) {
    let str = "";

    for (let j = 1; j <= i; j++) {
      str += "*";
    }

    // Lower Space part
    for (let k = 1; k <= n * 2 - i * 2; k++) {
      str += " ";
    }

    for (let l = 1; l <= i; l++) {
      str += "*";
    }
    console.log(str);
  }
}
pattern19(5);
