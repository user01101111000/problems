// https://www.codewars.com/kata/525d8c20915a399b5600087b

function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.getMatchingWords = function (pattern) {
  let result = [];

  for (const elem of this.words) {
    if (elem.length == pattern.length) {
      let currentElem = elem.split("").filter((x, i) => pattern[i] == x);

      currentElem.join("") == pattern.replace(/[?]/g, "") && result.push(elem);
    }
  }

  return result;
};
