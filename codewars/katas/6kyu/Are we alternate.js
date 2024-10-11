// https://www.codewars.com/kata/59325dc15dbb44b2440000af

const isAlt = (word) => {
  const vowels = ["a", "e", "i", "o", "u"];
  const startBool = vowels.includes(word[0]);
  const wordBools = word.split("").map((x) => vowels.includes(x));

  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (
      (i % 2 && wordBools[i] == !startBool) ||
      (i % 2 == 0 && wordBools[i] == startBool)
    )
      count++;
  }

  return count == word.length;
};
