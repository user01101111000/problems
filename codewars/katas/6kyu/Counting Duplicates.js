// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

const duplicateCount = (text) =>
  Object.values(
    text
      .toLowerCase()
      .split("")
      .reduce((acc, x) => {
        acc[x] ? acc[x]++ : (acc[x] = 1);
        return acc;
      }, {})
  ).filter((x) => x != 1).length;
