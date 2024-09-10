// https://www.codewars.com/kata/62ad72443809a4006998218a

function likeOrDislike(buttons) {
  if (buttons.length == 0) return Nothing;

  let newButtons = [buttons.at(-1)];

  for (let i = buttons.length - 1; i >= 0; i--) {
    if (buttons[i] == buttons[i - 1]) newButtons.unshift(buttons[i]);
    else break;
  }

  if (newButtons.length == 1) return newButtons[0];

  if (newButtons.length % 2) return newButtons[0];

  return Nothing;
}
