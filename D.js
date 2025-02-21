let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    // Update the current index within bounds
    currentIndex = (currentIndex + step + totalSlides) % totalSlides;

    // Move slides
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}



