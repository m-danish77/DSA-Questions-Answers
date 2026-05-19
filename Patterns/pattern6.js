// Pattern 6  n = 3
// 1 2 3
// 1 2
// 1

function pattern6(n) {
  for (let i = n; i >= 1; i--) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += `${j} `;
    }
    console.log(str.trim());
  }
}

pattern6(3);
