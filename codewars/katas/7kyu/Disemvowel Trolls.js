// https://www.codewars.com/kata/52fba66badcd10859f00097e

const disemvowel = (str) =>
  str
    .split("")
    .filter(
      (letter) =>
        !["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"].includes(letter)
    )
    .join("");
