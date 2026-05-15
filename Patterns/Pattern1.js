// Pattern 1
// * * *
// * * *
// * * *

function pattern1(n) {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
      str += "* ";
    }
    console.log(str);
  }
}

pattern1(3);
