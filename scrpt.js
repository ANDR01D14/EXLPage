document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links (optional, if you add more sections)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Example of a subtle animation on scroll (e.g., fade in content)
    // This would typically apply to sections further down the page.
    // Let's add a basic example for the CTA button in the hero.
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        // You could add a delay or specific animation when the page loads
        setTimeout(() => {
            ctaButton.style.opacity = '1';
            ctaButton.style.transform = 'translateY(0)';
        }, 1000); // 1 second delay
    }
    // For this to work, you'd need initial CSS:
    // .cta-button { opacity: 0; transform: translateY(20px); transition: opacity 1s ease-out, transform 1s ease-out; }
});
