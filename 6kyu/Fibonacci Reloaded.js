// https://www.codewars.com/kata/52549d3e19453df56f0000fe

function fib(n) {
  let fibonacci = [0, 1];

  for (let i = 1; i <= n - 2; i++)
    fibonacci.push(fibonacci[i - 1] + fibonacci[i]);

  return fibonacci[n - 1];
}
