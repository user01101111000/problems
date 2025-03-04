// https://www.codewars.com/kata/55147ff29cd40b43c600058b

function charConcat(string) {

    const length = Math.floor(string.length / 2);
    let word = "";

    for (let i = 0; i < length; i++) {

        word += string[i] + string.at(-i - 1) + Number(i + 1);

    }

    return word;
}