// https://www.codewars.com/kata/5a29a0898f27f2d9c9000058

const solve = (s) =>
  Object.values(
    s.split("").reduce(
      (acc, x) => {
        const n = x.charCodeAt();
        if (n >= 65 && n <= 90) acc["up"] = -~acc["up"];
        else if (n >= 97 && n <= 122) acc["low"] = -~acc["low"];
        else if (n >= 48 && n <= 57) acc["num"] = -~acc["num"];
        else acc["sp"] = -~acc["sp"];
        return acc;
      },
      { up: 0, low: 0, num: 0, sp: 0 }
    )
  );
