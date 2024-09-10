// https://www.codewars.com/kata/52efefcbcdf57161d4000091

const count = (string) =>
  string
    .split("")
    .reduce((acc, x) => (acc[x] ? acc[x]++ : (acc[x] = 1), acc), {});
