// https://www.codewars.com/kata/52fb87703c1351ebd200081f

const whatCentury = (year) => {
  const century = Math.ceil(year / 100);

  if (century % 10 === 1 && century % 100 !== 11) return century + "st";
  else if (century % 10 === 2 && century % 100 !== 12) return century + "nd";
  else if (century % 10 === 3 && century % 100 !== 13) return century + "rd";
  else return century + "th";
};
