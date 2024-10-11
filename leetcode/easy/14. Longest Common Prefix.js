// https://leetcode.com/problems/longest-common-prefix/description/

var longestCommonPrefix = function (strs) {
  const length = Math.min(...strs.map((x) => x.length));
  let pref = "";

  for (let i = 0; i < length; i++) {
    if (strs.every((x) => x.startsWith(pref + strs[0][i]))) pref += strs[0][i];
    else break;
  }

  return pref;
};
