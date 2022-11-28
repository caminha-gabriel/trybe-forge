const btn = document.getElementById('btnToListen');
const counterParagraph = document.getElementById('counter');
const stopParagraph = document.getElementById('stop');
let counter = 0;

btn.addEventListener('click', () => {
  console.log(counter);
  counter += 1;
  counterParagraph.innerHTML = `${counter} clicks`;

  if (counter >= 30) {
    stopParagraph.innerHTML = 'OKAY, I UNDERSTOOD, STOP CLICKING IT!!!'
  };
});