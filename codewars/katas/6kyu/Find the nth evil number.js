// https://www.codewars.com/kata/634420abae4b81004afefca7

function getEvil(n) {
  n = BigInt(2n) * (BigInt(n) - BigInt(1n));

  const isEvil = (n) =>
    BigInt(n).toString(2).replaceAll("0", "").length % 2 == 0;

  return isEvil(n) ? BigInt(n) : BigInt(n + BigInt(1));
}
