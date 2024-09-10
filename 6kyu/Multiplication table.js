// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08

const multiplicationTable = (size) =>
  Array.from({ length: size }, (_, i) =>
    Array.from({ length: size }, (_, z) => (i + 1) * (z + 1))
  );
