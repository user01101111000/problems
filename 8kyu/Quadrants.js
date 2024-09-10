// https://www.codewars.com/kata/643af0fa9fa6c406b47c5399

const quadrant = (x, y) => {
  if (x > 0 && y > 0) return 1;
  if (x < 0 && y > 0) return 2;
  if (x < 0 && y < 0) return 3;

  return 4;
};
