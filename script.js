// Carousel functionality
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showSlides() {
  const container = document.querySelector('.carousel-container');
  container.style.transform = `translateX(-${slideIndex * 100}%)`;
  slideIndex = (slideIndex + 1) % totalSlides;
}

setInterval(showSlides, 5000); // Ganti slide setiap 5 detik
