// https://www.codewars.com/kata/59c8b38423dacc7d95000008

const isValid = (formula) => {
  if (formula.includes(7) || formula.includes(8)) {
    if (formula.includes(1) && formula.includes(2)) return false;
    if (formula.includes(3) && formula.includes(4)) return false;

    if (formula.includes(5) || formula.includes(6))
      return formula.includes(5) && formula.includes(6);

    return true;
  }

  return false;
};
