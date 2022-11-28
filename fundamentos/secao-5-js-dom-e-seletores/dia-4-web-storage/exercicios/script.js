const body = document.body;
const selectBgColor = document.getElementById('bgColor');
const selectTextColor = document.getElementById('textColor');
const selectFontSize = document.getElementById('fontSize');
const selectLineHeight = document.getElementById('lineHeight');
const selectFontFamily = document.getElementById('fontFamily');

body.style.backgroundColor = localStorage.getItem('bgColor');
body.style.color = localStorage.getItem('textColor');
body.style.fontSize = localStorage.getItem('fontSize');
body.style.lineHeight = localStorage.getItem('lineHeight');
body.style.fontFamily = localStorage.getItem('fontFamily');

selectBgColor.addEventListener('click', (event) => {
  const color = event.target.value;
switch (color) {
  case 'white':
    body.style.backgroundColor = 'white';
    localStorage.setItem('bgColor', 'white');
    break;

  case 'blue':
    body.style.backgroundColor = 'blue';
    localStorage.setItem('bgColor', 'blue');
  break;

  case 'gray':
    body.style.backgroundColor = 'gray';
    localStorage.setItem('bgColor', 'gray');
  break;

  case 'green':
    body.style.backgroundColor = 'green';
    localStorage.setItem('bgColor', 'green');
  break;

  case 'purple':
    body.style.backgroundColor = 'purple';
    localStorage.setItem('bgColor', 'purple');
  break;

  case 'red':
    body.style.backgroundColor = 'red';
    localStorage.setItem('bgColor', 'red');
  break;
  };
})

selectTextColor.addEventListener('click', (event) => {
  const color = event.target.value;
switch (color) {
  case 'white':
    body.style.color = 'white';
    localStorage.setItem('textColor', 'white');
  break;

  case 'blue':
    body.style.color = 'blue';
    localStorage.setItem('textColor', 'blue');
  break;

  case 'gray':
    body.style.color = 'gray';
    localStorage.setItem('textColor', 'gray');
  break;

  case 'green':
    body.style.color = 'green';
    localStorage.setItem('textColor', 'green');
  break;

  case 'purple':
  body.style.color = 'purple';
  localStorage.setItem('textColor', 'purple');
  break;

  case 'red':
  body.style.color = 'red';
  localStorage.setItem('textColor', 'red');
  break;
  };
});

selectFontSize.addEventListener('keyup', (event) => {
  const size = event.target.value;
  const newSize = size + 'px';
  body.style.fontSize = newSize;
  localStorage.setItem('fontSize', newSize);
});

selectLineHeight.addEventListener('click', (event) => {
  const height = event.target.value;
  switch (height) {
    case 'normal':
      body.style.lineHeight = 'normal';
      localStorage.setItem('lineHeight', 'normal');
      break;
  
    case '0.8x':
      body.style.lineHeight = '0.8';
      localStorage.setItem('lineHeight', '0.8');
      break;

    case '1.6x':
      body.style.lineHeight = '1.6';
      localStorage.setItem('lineHeight', '1.6');
      break;

    case '2.4x':
      body.style.lineHeight = '2.4';
      localStorage.setItem('lineHeight', '2.4');
      break;

    default:
      break;
  };
});

selectFontFamily.addEventListener('click', (event) => {
  const font = event.target.value;
  switch (font) {
    case 'verdana':
      body.style.fontFamily = 'verdana';
      localStorage.setItem('fontFamily', 'verdana');

      break;

    case 'helvetica':
      body.style.fontFamily = 'helvetica';
      localStorage.setItem('fontFamily', 'helvetica');

      break;

    default:
      break;
  };
});
