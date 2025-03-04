// https://www.codewars.com/kata/5286b2e162056fd0cb000c20

function collatz(n) {
    const arr = [n];

    while (n !== 1) {

        if (n % 2) n = n * 3 + 1;
        else n = n / 2;

        arr.push(n);

    }

    return arr.join("->");
}

// other solution

function collatz(n) {
    if (n === 1) return "1";
    return n + "->" + collatz(n % 2 === 0 ? n / 2 : 3 * n + 1)
}