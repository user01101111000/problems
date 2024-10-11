// https://www.codewars.com/kata/58f6000bc0ec6451960000fd

const selReverse = (array, length) => {
  if (length == 0 || length == 1) return array;

  const arrLength = Math.ceil(array.length / length);

  let finArr = [];

  for (let i = 0; i < arrLength; i++) {
    finArr = [
      ...finArr,
      ...array.slice(i * length, i * length + length).reverse(),
    ];
  }

  return finArr;
};
