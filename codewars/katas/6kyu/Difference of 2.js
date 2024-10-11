// https://www.codewars.com/kata/5340298112fa30e786000688

function twosDifference(input) {
  input = input.sort((a, b) => a - b);
  let arr = [];

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (Math.abs(input[i] - input[j]) == 2)
        arr.push([input[i], input[j]].sort((a, b) => a - b));
    }
  }

  let lastArr = [];

  for (let i = 0; i < arr.length; i++)
    if (lastArr.every((x) => x[0] != arr[i][0])) lastArr.push(arr[i]);

  return lastArr;
}

// other

function twosDifference(input) {
  return input
    .sort(function (a, b) {
      return a - b;
    })
    .filter(function (a) {
      return input.indexOf(a + 2) != -1;
    })
    .map(function (a) {
      return [a, a + 2];
    });
}
