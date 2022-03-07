let body = document.body;
let selectBgColor = document.getElementById('bgColor');
let selectTextColor = document.getElementById('textColor');
let selectFontSize = document.getElementById('fontSize');

selectBgColor.addEventListener('click', (event) => {
  const color = event.target.value;
switch (color) {
  case 'white':
    body.style.backgroundColor = 'white';
  break;

  case 'blue':
    body.style.backgroundColor = 'blue';
  break;

  case 'gray':
    body.style.backgroundColor = 'gray';
  break;

  case 'green':
    body.style.backgroundColor = 'green';
  break;

  case 'purple':
    body.style.backgroundColor = 'purple';
  break;

  case 'red':
    body.style.backgroundColor = 'red';
  break;
  }
})

selectTextColor.addEventListener('click', (event) => {
  const color = event.target.value;
switch (color) {
  case 'white':
    body.style.color = 'white';
  break;

  case 'blue':
    body.style.color = 'blue';
  break;

  case 'gray':
    body.style.color = 'gray';
  break;

  case 'green':
    body.style.color = 'green';
  break;

  case 'purple':
  body.style.color = 'purple'
  break;
  }
});
selectFontSize.addEventListener('keyup', (event) => {
  const size = event.target.value;
  body.style.fontSize = size +'px';
})