// https://www.codewars.com/kata/59c633e7dcc4053512000073

export function solve(s: string): number {
  const vowels = ["a", "e", "i", "o", "u"];

  let word: string = "";

  return Math.max(
    ...s
      .split("")
      .reduce<string[]>((acc, x, i, arr) => {
        if (vowels.includes(x)) {
          word && acc.push(word);
          word = "";
        } else word += x;

        if (i == arr.length - 1) acc.push(word);

        return acc;
      }, [])
      .map((x) => sumOfLetters(x))
  );
}

export function sumOfLetters(x: string) {
  return x.split("").reduce((acc, x) => x.charCodeAt(0) - 96 + acc, 0);
}
