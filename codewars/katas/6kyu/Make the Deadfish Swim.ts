// https://www.codewars.com/kata/51e0007c1f9378fa810002a9

function generate(f: string, x: number): number {
  switch (f) {
    case "i":
      return x + 1;

    case "d":
      return x - 1;

    case "s":
      return x ** 2;

    default:
      return x;
  }
}

export function parse(data: string): number[] {
  return data.split("").reduce(
    (acc: { initial: number; result: number[] }, x: string) => {
      acc.initial = generate(x, acc.initial);

      if (x == "o") acc.result.push(acc.initial);

      return acc;
    },
    { initial: 0, result: [] }
  ).result;
}
