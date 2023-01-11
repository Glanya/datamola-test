const burgerBtn = document.querySelector('.burger__btn');
const burgerMenu = document.querySelector('.nav');

burgerBtn.addEventListener('click', function() {
  burgerBtn.classList.toggle('open');
  burgerMenu.classList.toggle('show');
}) 