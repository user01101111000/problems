// https://www.codewars.com/kata/58afa8185eb02ea2a7000094

function pairwise(arr, n) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (i == arr.length - 1) break;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == n) {
        result.push(arr.indexOf(arr[i]));
        delete arr[i];
        result.push(arr.indexOf(arr[j]));
        delete arr[j];
      }
    }
  }

  return result.reduce((acc, x) => acc + x, 0);
}
