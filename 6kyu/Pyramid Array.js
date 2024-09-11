// https://www.codewars.com/kata/515f51d438015969f7000013

const pyramid = (n) =>
  Array(n)
    .fill(0)
    .map((_, i) => Array(i + 1).fill(1));
