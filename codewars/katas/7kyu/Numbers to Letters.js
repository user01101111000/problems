// https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c

function switcher(x) {

    const alphabet = [...Array.from({ length: 26, }, (_, i) => String.fromCharCode(i + 97)), "!", "?", " "];

    return x.map(x => alphabet[+x <= 26 ? 26 - +x : +x - 1]).join("");

}