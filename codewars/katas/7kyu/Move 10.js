// https://www.codewars.com/kata/57cf50a7eca2603de0000090

function moveTen(s = "") {
  return s
    .split("")
    .map((x) =>
      String.fromCharCode(
        x.charCodeAt() + 10 > 122 ? x.charCodeAt() - 16 : x.charCodeAt() + 10
      )
    )
    .join("");
}
