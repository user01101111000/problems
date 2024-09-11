// https://www.codewars.com/kata/57b06f90e298a7b53d000a86

function queueTime(customers, n) {
  let kassalar = Array.from({ length: n }, (_) => 0);

  for (let i = 0; i < customers.length; i++)
    kassalar[kassalar.indexOf(Math.min(...kassalar))] += customers[i];

  return Math.max(...kassalar);
}
