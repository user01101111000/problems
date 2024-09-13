// https://www.codewars.com/kata/521ef596c106a935c0000519

function prime(num) {
  let arr = [];

  for (let i = 2, count = 0; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) count++;
    }
    if (count == 2) arr.push(i);
    count = 0;
  }

  return arr;
}
