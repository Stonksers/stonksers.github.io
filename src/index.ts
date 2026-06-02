// Fade-in animation for the hero section
window.addEventListener('load', () => {
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            const heroContent = document.querySelectorAll('.hero-content');
            heroContent.forEach(c => c.classList.add('visible'));
        });
    });
});

// Fade-in animation for elements when scrolling
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));