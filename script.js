// banner carousel script
let currentIndex = 0;
const slides = document.querySelectorAll('.bigcarousel-slide');
const totalSlides = slides.length;

function updateCarousel() {
  const track = document.querySelector('.bigcarousel-track');
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
}
// Simple client-side cart using localStorage
function addToCart(productId) {
  // Retrieve cart or initialize as empty array
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Find if product is already in cart
  const found = cart.find(item => item.id === productId);

  if (found) {
    found.qty += 1;
  } else {
    cart.push({ id: productId, qty: 1 });
  }

  // Save cart back
  localStorage.setItem('cart', JSON.stringify(cart));

  // Optionally update cart count UI
  updateCartCount();
}

// Update the cart count number in the navbar
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let count = cart.reduce((sum, item) => sum + item.qty, 0);
  let countSpan = document.querySelector('.cart-count');
  if (countSpan) countSpan.textContent = count;
}

// Run this on page load to sync cart count
window.addEventListener('DOMContentLoaded', updateCartCount);

