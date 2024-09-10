// https://www.codewars.com/kata/66bb6583ac1620f505a8e31b

function pyramid(s) {
  const n = (s - 2) / 4;

  return [n + 1, 2 * n, n + 1, n];
}
