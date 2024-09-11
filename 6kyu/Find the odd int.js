// https://www.codewars.com/kata/54da5a58ea159efa38000836

function findOdd(A) {
  let result = A.reduce((acc, x) => {
    if (!acc[x]) acc[x] = 1;
    else acc[x]++;

    return acc;
  }, {});

  let answer = 0;

  for (const key in result) {
    result[key] % 2 ? (answer = key) : 0;
  }

  return +answer;
}
