// scripts.js

// Scroll to section functionality
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Form submission alert
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Thank you for reaching out! We will get back to you soon.');
        form.reset();
    });
}
