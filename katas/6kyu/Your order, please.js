// https://www.codewars.com/kata/55c45be3b2079eccff00010f


const order = (words) => words.split(" ").sort((a,b) => a.split("").sort().join("")[0] - b.split("").sort().join("")[0]).join(" ");
