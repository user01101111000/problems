// https://www.codewars.com/kata/53697be005f803751e0015aa

export function encode(string: string): string {
  const vow = ["a", "e", "i", "o", "u"];

  return string
    .split("")
    .map((x: string) => (vow.indexOf(x) >= 0 ? vow.indexOf(x) + 1 : x))
    .join("");
}

export function decode(string: string): string {
  const vow = ["a", "e", "i", "o", "u"];

  return string
    .split("")
    .map((x: string) => (Number(+x) ? vow[+x - 1] : x))
    .join("");
}
