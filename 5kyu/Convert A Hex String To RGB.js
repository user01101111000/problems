// https://www.codewars.com/kata/5282b48bb70058e4c4000fa7

function hexStringToRGB(hexString) {
  hexString = hexString.replace("#", "");

  const r = parseInt(hexString.slice(0, 2), 16);
  const g = parseInt(hexString.slice(2, 4), 16);
  const b = parseInt(hexString.slice(4, 6), 16);

  return { r: r, g: g, b: b };
}
