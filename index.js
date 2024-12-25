let currentIndex = 0;
const slides = document.querySelectorAll('.image-sliderfade');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach(slide => slide.style.display = 'none');
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].style.display = 'block';
    dots[index].classList.add('active');
}

function changeSlide(step) {
    currentIndex = (currentIndex + step + slides.length) % slides.length; 
    showSlide(currentIndex);
}

showSlide(currentIndex);
setInterval(() => {
    changeSlide(0); 
}, 3000);
