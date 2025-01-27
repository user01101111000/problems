// https://www.codewars.com/kata/566efcfbf521a3cfd2000056

function flipNumber(n) {

    const length = n.length;
    let new_word = n;

    for (let i = 0; i < length - 1; i++) {

        const current_word = [...new_word.slice(i)].reverse().join("");

        new_word = new_word.slice(0, i) + current_word;


    }

    return new_word;


}
