// https://www.codewars.com/kata/55b1e5c4cbe09e46b3000034

function isPronic(n) {
    return Math.floor(Math.sqrt(n)) * (Math.floor(Math.sqrt(n)) + 1) == n
}