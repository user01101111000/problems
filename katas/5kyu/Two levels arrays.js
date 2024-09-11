// https://www.codewars.com/kata/5227129b316b56d50d0003b7

const flattenTwoLevels = (array) =>
  array.flatMap((x) => (x instanceof Array ? [x.flat(Infinity)] : x));
