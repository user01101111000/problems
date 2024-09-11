// https://www.codewars.com/kata/54b724efac3d5402db00065e

const decodeMorse = morseCode => morseCode.split("   ").map(x => x.split(" ").map(x => MORSE_CODE[x]).join("")).join(" ").trim()
