// Pattern 5  n = 3
// * * *
// * *
// *

function pattern5(n) {
  for (let i = n; i >= 1; i--) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += `* `;
    }
    console.log(str.trim());
  }
}

pattern5(3);
