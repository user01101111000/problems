// https://www.codewars.com/kata/550498447451fbbd7600041c

export function comp(a1: number[] | null, a2: number[] | null): boolean {
  return a1 && a2
    ? a1.reduce((acc, x) => acc + x, 0) ==
        a2.map((x) => Math.sqrt(x)).reduce((acc, x) => acc + x, 0)
    : false;
}
