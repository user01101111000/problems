// https://leetcode.com/problems/maximum-69-number/description/

function maximum69Number(num: number): number {
  const snum = (num + "").split("");

  for (let i = 0, count = 0; i < snum.length; i++) {
    if (snum[i] == "6" && !count) {
      snum[i] = "9";
      count++;
    }
  }
  return +snum.join("");
}
