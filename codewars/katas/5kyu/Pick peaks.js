// https://www.codewars.com/kata/5279f6fe5ab7f447890006a7

function pickPeaks(arr) {
  let result = {
    pos: [],
    peaks: [],
  };

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      result["peaks"].push(arr[i]);
      result["pos"].push(i);
    } else if (arr[i] > arr[i - 1] && arr[i] == arr[i + 1]) {
      let m = 2;
      while (arr[i] == arr[i + m]) {
        m++;
      }
      if (arr[i] > arr[i + m]) {
        result["peaks"].push(arr[i]);
        result["pos"].push(i);
      }
    }
  }

  return result;
}
