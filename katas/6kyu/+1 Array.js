// https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9

function upArray(arr) {
  if (
    !arr.every((x) => x >= 0) ||
    !arr.every((x) => x % 10 == x) ||
    arr.length == 0
  )
    return null;

  let fin = [];
  let brain = false;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == 9 && i == arr.length - 1) {
      fin.unshift(0);
      brain = true;
    } 
    else if (brain && arr[i] == 9) fin.unshift(0);
    else if (arr[i] < 9 && i == arr.length - 1) fin.unshift(arr[i] + 1);
    else {
      fin.unshift(arr[i] + brain);
      brain = false;
    }
  }

  if (brain) fin.unshift(1);

  return fin;
}
