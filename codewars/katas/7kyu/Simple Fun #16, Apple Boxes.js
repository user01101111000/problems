// https://www.codewars.com/kata/58846b46f4456a8919000025

function appleBoxes(k) {
    let r = 0, y = 0;

    for (let i = 1; i <= k; i++) {
        if (i % 2) y += i * i;
        else r += i * i;
    }

    return r - y;
}