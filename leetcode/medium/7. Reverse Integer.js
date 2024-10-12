// https://leetcode.com/problems/reverse-integer/description/

var reverse = function (x) {
  const n = +Math.abs(x).toString().split("").reverse().join("");

  if (n > 0x7fffffff) return 0;

  return x > 0 ? n : -n;
};
