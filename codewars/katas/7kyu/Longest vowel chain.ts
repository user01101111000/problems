// https://www.codewars.com/kata/59c5f4e9d751df43cf000035

export function solve(s: string): number {
  const vowels = ["a", "i", "o", "u", "e"];
  let word = "";
  return Math.max(
    ...s.split("").reduce((a: number[], x: string) => {
      if (vowels.includes(x)) word += x;
      else word = "";

      a.push(word.length);

      return a;
    }, [])
  );
}
