// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e

function firstNonRepeatingLetter(s) {
  if (s.length == 1 || s.length == 0) return s;

  return (
    s
      .split("")
      .find(
        (x) =>
          s.toLowerCase().indexOf(x.toLowerCase()) ==
          s.toLowerCase().lastIndexOf(x.toLowerCase())
      ) || ""
  );
}
