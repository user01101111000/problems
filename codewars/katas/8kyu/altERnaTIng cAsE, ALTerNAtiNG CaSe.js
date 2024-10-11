// https://www.codewars.com/kata/56efc695740d30f963000557

String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((x) => (x == x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()))
    .join("");
};
