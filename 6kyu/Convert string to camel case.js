// https://www.codewars.com/kata/517abf86da9663f1d2000003

function toCamelCase(str) {
  let result = str
    .split("-")
    .map((x, i) => (i == 0 ? x : x[0].toUpperCase() + x.slice(1)))
    .join("");

  return result.includes("_")
    ? result
        .split("_")
        .map((x, i) => (i == 0 ? x : x[0].toUpperCase() + x.slice(1)))
        .join("")
    : result;
}
