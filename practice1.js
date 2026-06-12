// 1
// 0 1
// 1 0 1
// 0 1 0 1

function diamondProblem(n) {
  let interChange = 0;
  for (let i = 1; i <= n; i++) {
    let str = "";
    let startValue = i % 2 == 1 ? 1 : 0;
    for (j = 1; j <= i; j++) {
      str += startValue + " ";
      startValue = startValue == 1 ? 0 : 1;
    }
    console.log(str.trim());
  }
}

diamondProblem(4);
