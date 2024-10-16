// https://www.codewars.com/kata/55de8eabd9bef5205e0000ba

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

function findEmirp(n) {
  const arr = [];

  for (let i = 2; i < n; i++) {
    const revNum = +i.toString().split("").reverse().join("");

    if (isPrime(i) && isPrime(revNum) && i != revNum) arr.push(i);
  }

  return arr.length == 0
    ? [0, 0, 0]
    : [arr.length, Math.max(...arr), arr.reduce((a, x) => a + x, 0)];
}
