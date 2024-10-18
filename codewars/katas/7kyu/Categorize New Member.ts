// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

export function openOrSenior(data: number[][]): string[] {
  return data.map((x) => (x[0] >= 55 && x[1] > 7 ? "Senior" : "Open"));
}
