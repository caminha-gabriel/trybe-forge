document.querySelector('header').style.backgroundColor = 'rgb(50, 168, 84)'

document.querySelector('.emergency-tasks').style.backgroundColor = '#fa8072';

document.querySelector('.no-emergency-tasks').style.backgroundColor = '#fdfd96';

let etH3 = document.querySelectorAll('.emergency-tasks h3');

for (let i = 0; i < etH3.length; i+= 1) {
    etH3[i].style.backgroundColor = '#a865c9'
}

let netH3 = document.querySelectorAll('.no-emergency-tasks h3');

for (let i = 0; i < netH3.length; i+= 1) {
    netH3[i].style.backgroundColor = '#231f20'
}

document.querySelector('footer').style.backgroundColor = '#013220'