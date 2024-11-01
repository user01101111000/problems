// https://leetcode.com/problems/delete-characters-to-make-fancy-string/description

function makeFancyString(s: string): string {

    let lastWord: string = "";
    let count: number = 0;


    for (let i: number = 0; i < s.length; i++) {

        if (s[i] == s[i - 1]) count++;
        else count = 0

        if (count < 2)
            lastWord += s[i];


    }
    return lastWord;

}
