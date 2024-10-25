// https://www.codewars.com/kata/5626b561280a42ecc50000d1

function sumDigPow(a, b) {
  const arr = [];

  for (let i = a; i < b; i++) {
    let sum = i
      .toString()
      .split("")
      .map(Number)
      .reduce((acc, x, z) => acc + x ** (z + 1), 0);

    if (sum == i) arr.push(i);
  }

  return arr;
}
