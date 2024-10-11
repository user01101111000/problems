// https://www.codewars.com/kata/54e6533c92449cc251001667

const uniqueInOrder = (iterable) =>
  [...iterable].map((x, i) => (x == iterable[i + 1] ? "" : x)).filter((x) => x);
