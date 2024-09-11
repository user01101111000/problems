// https://www.codewars.com/kata/58528e9e22555d8d33000163

function minutesToMidnight(d) {
  console.log(d);
  const currentTime =
    d.getHours() * 60 + d.getMinutes() + Math.round(d.getSeconds() / 60);

  return 1440 - currentTime == 1
    ? 1440 - currentTime + " minute"
    : 1440 - currentTime + " minutes";
}
