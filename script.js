let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {

  slides.forEach(slide => slide.classList.remove('active'));
  
  if (index < 0) {
    currentSlide = slides.length - 1;
  } else if (index >= slides.length) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }
  
  slides[currentSlide].classList.add('active');
}

function changeSlide(step) {
  showSlide(currentSlide + step);
}


showSlide(currentSlide);
