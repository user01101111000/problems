// https://www.codewars.com/kata/59f7fc109f0e86d705000043

const divisibleByThree = (str) => str.split("").reduce((a, x) => a + +x, 0) % 3 == 0;
