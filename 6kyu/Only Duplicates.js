// https://www.codewars.com/kata/5a1dc4baffe75f270200006b

function onlyDuplicates(str) {
  str = str.split("");
  for (let i = str.length - 1, count = 0; i >= 0; i--) {
    for (let j = str.length - 1; j >= 0; j--) {
      if (i == j) continue;
      if (str[i] == str[j]) {
        count++;
      }
    }
    if (count == 0) {
      str.splice(str.indexOf(str[i]), 1);
    } else count = 0;
  }

  return str.join("");
}
