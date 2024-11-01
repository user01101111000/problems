// https://www.codewars.com/kata/57a049e253ba33ac5e000212

export function factorial(n: number): number {
    return (n == 0 || n == 1) ? 1 : n * factorial(n - 1);
}