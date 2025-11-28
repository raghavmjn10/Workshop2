// MENU TOGGLE
const menuBtn = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const expanded = navLinks.classList.contains("open");
    menuBtn.setAttribute("aria-expanded", expanded);
    menuBtn.innerHTML = expanded ? "✕" : "☰";
});


// CONTACT FORM MESSAGE
const form = document.getElementById("contact-form");
const msg = document.getElementById("form-msg");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        msg.textContent = "Please fill in all required fields.";
        msg.style.color = "red";
        return;
    }

    msg.textContent = "Message sent successfully!";
    msg.style.color = "green";

    form.reset();
});
