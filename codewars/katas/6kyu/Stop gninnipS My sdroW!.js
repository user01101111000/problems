// https://www.codewars.com/kata/5264d2b162488dc400000001

const spinWords = (string) =>
  string
    .split(" ")
    .map((x) => (x.length >= 5 ? x.split("").reverse().join("") : x))
    .join(" ");
