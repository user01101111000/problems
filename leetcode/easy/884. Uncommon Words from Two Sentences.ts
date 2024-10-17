// https://leetcode.com/problems/uncommon-words-from-two-sentences/description

function uncommonFromSentences(s1: string, s2: string): any {
  return Object.entries(
    [...s1.split(" "), ...s2.split(" ")].reduce(
      (a: any, x) => (a[x] ? a[x]++ : (a[x] = 1), a),
      {}
    )
  )
    .filter((x) => x[1] == 1)
    .map((x) => x[0]);
}
