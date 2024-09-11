// https://www.codewars.com/kata/5809c661f15835266900010a

const levenshtein = (a, b) => {
  let levenshteinCount = 0;

  const aArray = a.split("");
  const bArray = b.split("");

  const diff = Math.abs(aArray.length - bArray.length);

  for (let i = 0; i < aArray.length; i++)
    aArray[i] != bArray[i] && levenshteinCount++;

  if (diff == 0) return levenshteinCount;
  else return diff + levenshteinCount;
};
