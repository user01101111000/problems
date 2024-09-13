// https://www.codewars.com/kata/5314b3c6bb244a48ab00076c

function luckCheck(ticket) {
  if (ticket.trim().length != ticket.length) throw new Error("Invalid ticket");

  ticket = ticket.split("");

  if (ticket.every((x) => !+x)) return true;

  if (ticket.length == 0 || !ticket.every((x) => +x + "" != "NaN"))
    throw new Error("Invalid ticket");

  if (ticket.length % 2) ticket.splice(Math.floor(ticket.length / 2), 1);

  const length = ticket.length;

  return (
    ticket.reduce((acc, x) => acc + +x, 0) /
      ticket.slice(0, length / 2).reduce((acc, x) => acc + +x, 0) ==
    2
  );
}
