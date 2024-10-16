// https://leetcode.com/problems/maximum-number-of-words-you-can-type/description

function canBeTypedWords(text: string, brokenLetters: string): number {
  const brokenLetterArr = brokenLetters.split("");
  const textArr = text.split(" ");

  return textArr.filter((x) => !brokenLetterArr.some((z) => x.includes(z))).length;
}