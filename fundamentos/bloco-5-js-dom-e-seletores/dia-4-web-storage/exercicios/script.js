let body = document.body;
let selectBgColor = document.getElementById('bgColor')

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
;//
})