const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

document.getElementById("scrollTopBtn").addEventListener("click", function () {
window.scrollTo({
    top: 0,
    behavior: "smooth"
});
});

/// script.js
const hamburger = document.getElementById('hamburger');
const dropdownMenu = document.getElementById('dropdown-menu');

hamburger.addEventListener('click', () => {
  const isOpen = dropdownMenu.classList.toggle('show');
  hamburger.setAttribute('aria-expanded', isOpen);
});

// Optional: close when clicking a link (for mobile UX)
dropdownMenu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    dropdownMenu.classList.remove('show');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});

