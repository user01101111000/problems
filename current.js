// https://www.codewars.com/kata/62ad72443809a4006998218a

const Like = "Like";
const Dislike = "Dislike";
const Nothing = "Nothing";

function likeOrDislike(buttons) {
  if (buttons.length == 0) return Nothing;

  const reversedButtons = buttons.reverse();
  let count = 1;

  for (let i = 0; i < reversedButtons.length; i++) {
    if (reversedButtons[i] == reversedButtons[i + 1]) count++;
    else break;
  }

  if (count == 1) return reversedButtons[0];
  else {
    if (count % 2) return reversedButtons[0];
    else return Nothing;
  }
}

console.log(
  likeOrDislike([
    Dislike,
    Like,
    Like,
    Like,
    Dislike,
    Dislike,
    Dislike,
    Like,
    Like,
    Like,
  ])
);
