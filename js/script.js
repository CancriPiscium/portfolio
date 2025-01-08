let currentSlide = localStorage.getItem("currentSlide") 
    ? parseInt(localStorage.getItem("currentSlide")) 
    : 0;
const slides = document.querySelectorAll(".slides");

// Fungsi untuk menampilkan slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
    currentSlide = index;
    localStorage.setItem("currentSlide", currentSlide); // Simpan slide saat ini ke localStorage
}

// Fungsi untuk slide berikutnya
function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
}

// Tampilkan slide terakhir dari localStorage
showSlide(currentSlide);

// Ganti slide otomatis setiap 3 detik
setInterval(nextSlide, 3000);

// let currentSlide = 0;
// const slides = document.querySelectorAll(".slides");

// function showSlide(index) {
//     slides[currentSlide].classList.remove("active");
//     currentSlide = index;
//     slides[currentSlide].classList.add("active");
// }

// function nextSlide() {
//     let nextIndex = (currentSlide + 1) % slides.length;
//     showSlide(nextIndex);
// }

// setInterval(nextSlide, 3000); // Automatically change slides every 3 seconds

// document.querySelectorAll('.navbar a').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });
