// https://www.codewars.com/kata/5259acb16021e9d8a60010af


function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

const lcm = (...arr) => {
    if (arr.length === 0) return 1;
    if (arr.some(x => x == 0)) return 0;

    return arr.reduce((acc, x) => acc * x / gcd(acc, x));

};