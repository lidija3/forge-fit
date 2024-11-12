const mainNav = document.querySelector('.mainNav');
const logoChange = document.querySelector('.mainNav ul li a img');

const mobileNav = document.querySelector('.mobileNav');

/* animate header on scroll */
function headerScroll() {
    if (window.scrollY > 50) {
        mainNav.classList.add('scrolled');
        mobileNav.classList.add('scrolled');
        logoChange.src = logoChange.getAttribute('data-scroll-logo');
    } else {
        mainNav.classList.remove('scrolled');
        mobileNav.classList.remove('scrolled');
        logoChange.src = logoChange.getAttribute('data-default-logo');
    }
}

document.addEventListener('scroll', headerScroll);
document.addEventListener('DOMContentLoaded', headerScroll);

// responsive menu
$('.hamburgerMenu i').click(function (e) {
    e.preventDefault();
    $('.mobileMenu').slideToggle();
});

$('.closeMenu i').click(function (e) {
    e.preventDefault();
    $('.mobileMenu').slideUp();
});