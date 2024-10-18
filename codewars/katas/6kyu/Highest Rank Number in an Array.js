// https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004

const highestRank = (arr) =>
  Math.max(
    ...Object.entries(arr.reduce((acc, x) => ((acc[x] = -~acc[x]), acc), {}))
      .sort((a, b) => b[1] - a[1])
      .filter((x, _, arr) => arr[0][1] == x[1])
      .map((x) => x[0])
  );
