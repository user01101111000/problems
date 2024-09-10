// https://www.codewars.com/kata/5262fa26875ed24a3e000029

const roomMates = (rooms, floor) =>
  rooms.slice((floor - 1) * 6, 6 * floor).filter(Boolean);
