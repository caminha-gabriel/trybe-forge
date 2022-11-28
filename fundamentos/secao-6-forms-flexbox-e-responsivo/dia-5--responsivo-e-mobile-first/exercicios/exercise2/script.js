let menuMobile = document.querySelector('i');
let menuCollapse = document.querySelector('.collapse');

menuMobile.addEventListener('click', function () {
  menuCollapse.classList.toggle('collapse');
})