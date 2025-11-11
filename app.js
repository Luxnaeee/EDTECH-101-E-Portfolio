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