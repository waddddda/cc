/**
 * Cat Care Community - Landing Page Script
 * Subtle scroll fade-in animations
 */

document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in class to animatable elements
    const heroContent = document.querySelector('.hero-title, .hero-tagline, .download-buttons');
    const aboutContent = document.querySelector('.about-title, .about-description, .about-image-placeholder');
    
    if (heroContent) heroContent.classList.add('fade-in');
    if (aboutContent) aboutContent.classList.add('fade-in');

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Smooth scroll for anchor links (if any are added later)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
