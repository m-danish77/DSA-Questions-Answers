// Pattern 1  n = 3
// * * *
// * * *
// * * *

function pattern1(n) {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
      str += "* ";
    }
    console.log(str.trim());
  }
}

pattern1(3);
