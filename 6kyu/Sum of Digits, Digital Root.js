// https://www.codewars.com/kata/541c8630095125aba6000c00

function digitalRoot(n) {
  let arr = n.toString().split("");

  for (let i = 0; i < 10; i++) {
    n = arr.reduce((acc, x) => +acc + +x, 0);
    if (n.toString().length == 1) break;
    arr = n.toString().split("");
  }

  return n;
}
