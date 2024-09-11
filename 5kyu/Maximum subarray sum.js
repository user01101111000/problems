// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c

var maxSequence = function (arr) {
  let currSum = 0;
  let maxSum = 0;

  for (const x of arr) {
    currSum = Math.max(currSum + x, x);
    maxSum = Math.max(currSum, maxSum);
  }
  return maxSum;
};

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i; j < arr.length; j++) {
//     currSum += arr[j];
//     currSum = Math.max(0, currSum);
//     maxSum = Math.max(maxSum, currSum);
//   }
//   currSum = 0;
// }

//   return maxSum;
