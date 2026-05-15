// Pattern 2  n = 3
// *
// * *
// * * *

function pattern2(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 0; j < i; j++) {
      str += "* ";
    }
    console.log(str.trim());
  }
}

pattern2(3);
