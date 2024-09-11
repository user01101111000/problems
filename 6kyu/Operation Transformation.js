// https://www.codewars.com/kata/579ef9607cb1f38113000100

function isTwoPower(n) {
  while (!(n % 2)) n = n / 2;

  if (n == 1) return true;
  return false;
}

const operation = (a, b) => {
  let count = 0;

  while (!isTwoPower(a)) {
    if (a % 2) a = (a - 1) / 2;
    else a = a / 2;

    count++;
  }

  while (a != b) {
    if (a > b) a = a / 2;
    else a = a * 2;

    count++;
  }
  return count;
};
