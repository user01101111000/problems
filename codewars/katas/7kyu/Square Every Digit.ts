// https://www.codewars.com/kata/546e2562b03326a88e000020

export class Kata {
  static squareDigits(num: number): number {
    return +num
      .toString()
      .split("")
      .map((x) => +x * +x)
      .join("");
  }
}
