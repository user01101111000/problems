// https://www.codewars.com/kata/570e1271e5c9a0cf2f000d11

String.prototype.kontti = function () {

    if (!Boolean(this)) return "";

    const vowels = ["a", "e", "i", "o", "u", "y"];

    const words = this.split(" ");


    const newWords = words.map((x) => {
        const idx = x.split("").findIndex(x => vowels.includes(x));

        if (idx < 0) return x;

        return "ko" + x.slice(idx + 1) + "-" + x.slice(0, idx + 1) + "ntti";
    });

    return newWords.join(" ");

}