let currentIndex = 0;
const slides = document.querySelectorAll('.banner-autoslide');
const totalSlides = slides.length;

function changeSlide() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; 
    changeSlide();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; 
    changeSlide();
}

setInterval(nextSlide, 3000);

window.addEventListener('scroll', function() {
    let backToTopButton = document.getElementById('back-to-top');
    
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});

document.querySelector('#next-button').addEventListener('click', nextSlide);
document.querySelector('#prev-button').addEventListener('click', prevSlide);
