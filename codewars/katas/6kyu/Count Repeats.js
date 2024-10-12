// https://www.codewars.com/kata/598ee7b6ec6cb90dd6000061

function countRepeats(str = "") {
  return (
    (z = 0) =>
    () => {
      str.split("").reduce((acc, x) => {
        if (acc.at(-1) == x) {
          z++;
          return acc;
        }
        return acc + x;
      }, "");

      return z;
    }
  )()();
}
