const menuButton = document.getElementById("menu-button");
const navLinks = document.querySelector(".nav-links");

// MENU TOGGLE
menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuButton.innerHTML = isOpen ? "✕" : "☰";
});

// CONTACT FORM HANDLER
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    document.getElementById("formResponse").innerHTML =
        "Thank you! Your message has been sent.";

    this.reset();
});
