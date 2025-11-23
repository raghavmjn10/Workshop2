// MENU TOGGLE
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

// FORM MESSAGE
const form = document.getElementById("contact-form");
const msg = document.getElementById("form-msg");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    msg.textContent = "Message sent!";
    msg.style.color = "lightgreen";
    form.reset();
});
