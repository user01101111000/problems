// https://www.codewars.com/kata/5476f4ca03810c0fc0000098

function getFunction(sequence) {
  const d = sequence[1] - sequence[0];
  const b = sequence[0];
  if (sequence[0] + d == sequence[1] && sequence[1] + d == sequence[2]) {
    if (d > 0 && b >= 0)
      return "f(x) = " + `${d == 1 ? "" : d}x${b == 0 ? "" : " + " + b}`;
    else if (d < 0 && b >= 0)
      return (
        "f(x) = " + `-${d == 1 ? "" : Math.abs(d)}x${b == 0 ? "" : " + " + b}`
      );
    else if (d > 0 && b <= 0)
      return (
        "f(x) = " + `${d == 1 ? "" : d}x${b == 0 ? "" : " - " + Math.abs(b)}`
      );
    else if (d < 0 && b <= 0)
      return (
        "f(x) = " +
        `-${d == 1 ? "" : Math.abs(d)}x${b == 0 ? "" : " - " + Math.abs(b)}`
      );
    else if (d == 0) return "f(x) = " + `${b < 0 ? "- " + Math.abs(b) : b}`;
  } else return "Non-linear sequence";
}
