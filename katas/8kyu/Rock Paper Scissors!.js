// https://www.codewars.com/kata/5672a98bdbdd995fad00000f

const rps = (p1, p2) =>
  p1 == p2
    ? "Draw!"
    : `Player ${2 - ["rs", `pr`, "sp"].includes(p1[0] + p2[0])} won!`;
