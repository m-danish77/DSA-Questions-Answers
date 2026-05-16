// Pattern 3  n = 3
// 1
// 1 2
// 1 2 3

function pattern3(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += `${j} `;
    }
    console.log(str.trim());
  }
}

pattern3(3);
