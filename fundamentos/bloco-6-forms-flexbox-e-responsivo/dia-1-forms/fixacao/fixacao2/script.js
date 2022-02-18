// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function clickPrevent(event) {
  event.preventDefault();
}

HREF_LINK.addEventListener('click', clickPrevent);

INPUT_CHECKBOX.addEventListener('click', clickPrevent);

function keyPressPrevent(event) {
  if (event.key !== 'a') {
    event.preventDefault();
  }
}

INPUT_TEXT.addEventListener('keypress', keyPressPrevent);