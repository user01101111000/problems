// https://www.codewars.com/kata/58b635903e78b34958000056

function countNumber(n, x) {
    let count = 0;

    for (let i = 1; i <= n; i++) {
        const max = i * n;

        if (x % i == 0 && x <= max) count++;

    }

    return count;


}
