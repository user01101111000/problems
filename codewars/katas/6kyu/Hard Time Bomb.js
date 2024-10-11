// https://www.codewars.com/kata/52532cc8e9ea83b89b000008

var wireCode = Object.keys(global).filter(x=>(typeof global[x] === 'number'))[0];

Bomb.CutTheWire(global[wireCode]);