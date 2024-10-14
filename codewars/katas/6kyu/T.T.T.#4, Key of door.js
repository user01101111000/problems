// https://www.codewars.com/kata/57530135aeb792ba42000620

function findKey(nums = []) {
  const finArr = [];

  for (let i = 0, arr = []; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      arr.push(nums[j].toString()[i]);
    }

    finArr.push(arr.filter((x) => arr.indexOf(x) === arr.lastIndexOf(x))[0]);
    arr = [];
  }

  return finArr.join("");
}
