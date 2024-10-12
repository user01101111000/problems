// https://www.codewars.com/kata/5a9e86705ee396d6be000091

function checkThreeAndTwo(array) {
  return array.reduce((acc, x, _) => {
    if (acc[x]) acc[x]++;
    else acc[x] = 1;

    if (_ == array.length - 1)
      return Object.values(acc).includes(3) && Object.values(acc).includes(2);

    return acc;
  }, {});
}
