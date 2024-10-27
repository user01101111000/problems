// https://www.codewars.com/kata/67191920c29c7e09d9f40707

function digitMultiplication(expr) {
  let mult = 1;
  const arr = [];

  for (let i = 0; i < expr.length; i++) {
    if (expr[i] == 0 || Number(expr[i])) {
      mult *= expr[i];

      if (i == expr.length - 1) arr.push(mult);
    } else {
      arr.push(mult, expr[i]);
      mult = 1;
    }
  }

  return eval(arr.join(""));
}
