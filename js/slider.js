let left = 0;

const slides = document.querySelector('.slider__images');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

nextBtn.addEventListener('click', function () {
  left += 12.5;
  if (left > 25) {
    left = 0;
  }
  slides.style.left = -left + 'rem';
});

prevBtn.addEventListener('click', function () {
  left -= 12.5;
  if (left < 0) {
    left = 25;
  }
  slides.style.left = -left + 'rem';
});