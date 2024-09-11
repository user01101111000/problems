// https://www.codewars.com/kata/55c04b4cc56a697bb0000048

const scramble = (str1, str2) => {
  let alphaBETA = Array.from({ length: 256 }, (_, i) => 0);

  str1.split("").forEach((x) => alphaBETA[x.charCodeAt()]--);
  str2.split("").forEach((x) => alphaBETA[x.charCodeAt()]++);

  alphaBETA = alphaBETA.filter((x) => x > 0);

  return alphaBETA.length == 0;
};
