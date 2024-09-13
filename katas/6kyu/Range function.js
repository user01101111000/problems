// https://www.codewars.com/kata/584ebd7a044a1520f20000d5

const range = (...arr) => {
  const length = arr.length;

  let array = [];

  if (length == 1) for (let i = 1; i <= arr[0]; i++) array.push(i);

  if (length == 2) for (let i = arr[0]; i <= arr[1]; i++) array.push(i);

  for (let i = arr[0]; i <= arr[2]; i = i + arr[1]) array.push(i);

  return array;
};
