// https://www.codewars.com/kata/51b62bf6a9c58071c600001b

function solution(number) {
  const rm = [
    { value: 1000, roman: "M" },
    { value: 900, roman: "CM" },
    { value: 500, roman: "D" },
    { value: 400, roman: "CD" },
    { value: 100, roman: "C" },
    { value: 90, roman: "XC" },
    { value: 50, roman: "L" },
    { value: 40, roman: "XL" },
    { value: 10, roman: "X" },
    { value: 9, roman: "IX" },
    { value: 5, roman: "V" },
    { value: 4, roman: "IV" },
    { value: 1, roman: "I" },
  ];

  let romanic = "";

  for (let i = 0; i < rm.length; i++) {
    while (number >= rm[i].value) {
      romanic += rm[i].roman;
      number -= rm[i].value;
    }
  }
  return romanic;
}
