// https://codewars.com/kata/59cfc000aeb2844d16000075

export function capitalize(s: string): string[] {
  return [
    s
      .split("")
      .map((x, i) => (i % 2 ? x : x.toUpperCase()))
      .join(""),
    s
      .split("")
      .map((x, i) => (i % 2 ? x.toUpperCase() : x))
      .join(""),
  ];
}
