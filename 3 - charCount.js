function charCount(str) {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (char === " ") {
      continue;
    }
    if (obj[char]) {
      obj[char] = obj[char] + 1;
    } else {
      obj[char] = 1;
    }
  }
  return obj;
}

console.log(charCount("Hello World!"));
