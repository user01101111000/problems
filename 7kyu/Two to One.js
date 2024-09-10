// https://www.codewars.com/kata/5656b6906de340bd1b0000ac

function longest(s1, s2) {
  return [...new Set((s1 + s2).split("").sort())].join("");
}
