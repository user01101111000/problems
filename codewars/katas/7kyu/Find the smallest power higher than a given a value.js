// https://www.codewars.com/kata/56ba65c6a15703ac7e002075

const findNextPower = (val, pow_) => Math.ceil(Math.pow(val + 1, 1 / pow_)) ** pow_;