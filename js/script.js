let currentSlide = 0;
const slides = document.querySelectorAll(".slides");

function showSlide(index) {
    slides[currentSlide].classList.remove("active");
    currentSlide = index;
    slides[currentSlide].classList.add("active");
}

function nextSlide() {
    let nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
}

setInterval(nextSlide, 3000); // Automatically change slides every 3 seconds

document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
