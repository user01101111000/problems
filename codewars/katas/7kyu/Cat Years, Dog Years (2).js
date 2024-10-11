// https://www.codewars.com/kata/5a6d3bd238f80014a2000187

const ownedCatAndDog = (catYears, dogYears) => [
  catYears >= 24 ? 2 + Math.floor((catYears - 24) / 4) : catYears >= 15 ? 1 : 0,
  dogYears >= 24 ? 2 + Math.floor((dogYears - 24) / 5) : dogYears >= 15 ? 1 : 0,
];
