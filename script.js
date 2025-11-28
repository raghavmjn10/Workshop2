// CONTACT FORM MESSAGE
const form = document.getElementById("contact-form");
const msg = document.getElementById("form-msg");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    msg.textContent = "Your message has been sent!";
    msg.style.color = "green";
    form.reset();
});
