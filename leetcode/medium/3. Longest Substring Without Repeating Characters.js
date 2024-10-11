// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

var lengthOfLongestSubstring = function (s) {
  if (s.length === 1) return 1;
  if (!s.length) return 0;

  let biggerWord = "";
  let words = [];

  for (let i = 0; i < s.length; i++) {
    if (biggerWord.includes(s[i])) {
      words.push(biggerWord.length);
      biggerWord = "";
    } else biggerWord += s[i];

    if (i === s.length - 1) break;

    for (let j = i + 1; j < s.length; j++) {
      if (biggerWord.includes(s[j])) {
        words.push(biggerWord.length);
        biggerWord = "";
        break;
      } else biggerWord += s[j];
    }
  }

  return Math.max(...words);
};
