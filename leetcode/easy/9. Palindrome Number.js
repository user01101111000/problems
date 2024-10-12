// https://leetcode.com/problems/palindrome-number/description/

var isPalindrome = function (x) {
  return x + "" == x.toString().split("").reverse().join("");
};
