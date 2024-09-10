// https://www.codewars.com/kata/585db3e8eec141ce9a00008f

function reverseVowels(str) {
  str = str.split("");
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  const obj = str.filter((x) => vowels.includes(x.toLowerCase())).reverse();

  const newMap = str.map((x) =>
    vowels.includes(x.toLowerCase()) ? obj[count++] : x
  );

  return newMap.join("");
}
