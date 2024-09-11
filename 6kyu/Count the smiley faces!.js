// https://www.codewars.com/kata/583203e6eb35d7980400002a

function countSmileys(arr) {
  const eyes = [":", ";"];
  const noses = ["-", "~"];
  const mouths = [")", "D"];

  let result = arr.filter((x) => {
    if (
      x.length == 3 &&
      eyes.includes(x[0]) &&
      noses.includes(x[1]) &&
      mouths.includes(x[2])
    )
      return x;
    else if (x.length == 2 && eyes.includes(x[0]) && mouths.includes(x[1]))
      return x;
  });

  return result.length;
}
