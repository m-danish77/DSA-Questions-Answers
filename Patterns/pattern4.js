// Pattern 4  n = 3
// 1
// 2 2
// 3 3 3

function pattern4(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += `${i} `;
    }
    console.log(str.trim());
  }
}

pattern4(3);
