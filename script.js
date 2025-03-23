document.addEventListener("DOMContentLoaded", () => {
    const ctaSlider = document.querySelector('.cta-slider');

    ctaSlider.addEventListener('click', () => {
        ctaSlider.classList.add('clicked');

        // Action triggered on click:
        setTimeout(() => {
            window.location.href = '#next-page'; // Update this link to desired location
        }, 600); // Delay to match animation
    });
});
