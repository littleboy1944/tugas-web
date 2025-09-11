// Burger menu functionality
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
});

// Skill logos animation
document.addEventListener('DOMContentLoaded', function() {
    const skillLogos = document.querySelectorAll('.skill-logo');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top < (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0;
    }

    function checkScroll() {
        skillLogos.forEach((logo, index) => {
            if (isInViewport(logo) && !logo.classList.contains('visible')) {
                setTimeout(() => {
                    logo.classList.add('visible'); // muncul satu per satu
                }, index * 200);
            }
        });
    }

    checkScroll();
    window.addEventListener('scroll', checkScroll);
});
