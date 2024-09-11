// https://www.codewars.com/kata/585d7d5adb20cf33cb000235

const findUniq = (arr) =>
  arr.filter((x) => arr.indexOf(x) == arr.lastIndexOf(x))[0];
