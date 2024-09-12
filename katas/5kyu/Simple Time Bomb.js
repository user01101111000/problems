// https://www.codewars.com/kata/523c7fbb0d47a759580000e2/javascript

var wire = Object.keys(global).filter((x) => typeof global[x] === "number")[0];
CutTheWire(this[wire]);
