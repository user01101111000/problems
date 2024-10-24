// https://www.codewars.com/kata/5830195755f28edad4000081

const getRow = (n) =>
  Array.from({ length: 26 - ((n - 1) % 26) }, (_, i) =>
    String.fromCharCode(i + ((n - 1) % 26) + 65)
  )
    .join("")
    .padStart(26, String.fromCharCode(((n - 1) % 26) + 65));
