const body = document.body;
body.style.fontSize = '26px';
const selectBgColor = document.getElementById('bgColor');
const selectTextColor = document.getElementById('textColor');
const selectFontSize = document.getElementById('fontSize');
const selectLineHeight = document.getElementById('lineHeight');
const selectFontFamily = document.getElementById('fontFamily');

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
  body.style.color = 'purple';
  break;

  case 'red':
  body.style.color = 'red';
  break;
  }
});

selectFontSize.addEventListener('keyup', (event) => {
  const size = event.target.value;
  body.style.fontSize = size +'px';

});

selectLineHeight.addEventListener('click', (event) => {
  const height = event.target.value;
  console.log(height);
  switch (height) {
    case 'normal':
      body.style.lineHeight = 'normal';
      break;
  
    case '0.8x':
      body.style.lineHeight = '0.8';
      break;

    case '1.6x':
      body.style.lineHeight = '1.6';
      break;

    case '2.4x':
      body.style.lineHeight = '2.4';
      break;

    default:
      break;
  }
});

selectFontFamily.addEventListener('click', (event) => {
  const font = event.target.value;
  switch (font) {
    case 'verdana':
      body.style.fontFamily = 'verdana';
      break;

    case 'helvetica':
      body.style.fontFamily = 'helvetica';
      break;

    default:
      break;
  }
});
