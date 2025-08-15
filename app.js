// Smooth scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Mobile menu toggle
function toggleMenu() {
    const nav = document.getElementById("navMenu");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

// Contact form submission
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thanks for your message! I'll get back to you soon.");
});
// Scroll animations
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
