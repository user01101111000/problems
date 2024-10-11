// https://www.codewars.com/kata/526d42b6526963598d0004db

const CaesarCipher = function (shift) {
  this.encode = (str) => {
    let result = "";
    str = str.toUpperCase();

    for (let x of str)
      result +=
        x.charCodeAt() >= 65 && x.charCodeAt() <= 90
          ? String.fromCharCode(((x.charCodeAt() - 64 + shift) % 26) + 64)
          : x;

    return result;
  };

  this.decode = (str) => {
    let result = "";
    str = str.toUpperCase();

    for (let x of str)
      result +=
        x.charCodeAt() >= 65 && x.charCodeAt() <= 90
          ? String.fromCharCode(
              (x.charCodeAt() - 64 - shift) % 26 < 0
                ? x.charCodeAt() - 64 - shift + 90
                : ((x.charCodeAt() - 64 - shift) % 26) + 64
            )
          : x;

    return result;
  };
};
