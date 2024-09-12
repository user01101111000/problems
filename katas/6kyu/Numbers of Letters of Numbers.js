// https://www.codewars.com/kata/599febdc3f64cd21d8000117

function numbersOfLetters(integer) {
  if (integer == 4) return ["four"];

  const nums = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };

  let numName = integer
    .toString()
    .split("")
    .map((x) => nums[x])
    .join("");

  let arr = [numName];

  if (numName.length > 9) {
    numName = numName.length
      .toString()
      .split("")
      .map((x) => nums[x])
      .join("");

    arr.push(numName);
  }

  while (numName.length != 4) {
    const v = nums[numName.length];

    arr.push(v);

    numName = v;
  }

  arr.push("four");

  return arr;
}
