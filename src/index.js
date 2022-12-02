import './scss/app.scss';

const navbarWrapper = document.querySelector('.navbar__wrapper');
const navbar = document.querySelector('.navbar');
const navbarLinks = navbar.querySelectorAll('.link');
const header = document.querySelector('.header');
const toursNavLinks = document.querySelector('.tours__nav').querySelectorAll('.link');

[...toursNavLinks].forEach((navItem) => {
    navItem.addEventListener('click', (e) => {
        e.preventDefault();

        const currentActive = [...toursNavLinks].find((item) => item.classList.contains('link_active'));

        if (currentActive === e.target) return;

        currentActive.classList.replace('link_active', 'link_black');
        e.target.classList.replace('link_black', 'link_active');
    });
});

document.addEventListener('scroll', (e) => {
    const shift = window.scrollY;

    if (+shift >= 450 && !navbarWrapper.classList.contains('navbar__wrapper__fixed')) {
        navbarWrapper.classList.add('navbar__wrapper__fixed');
        navbar.classList.add('container');
        [...navbarLinks].forEach((link) => link.classList.replace('link_white', 'link_black'));
        header.style.paddingTop = `${navbar.offsetHeight}px`;
    }
    if (+shift < 450 && navbarWrapper.classList.contains('navbar__wrapper__fixed')) {
        navbarWrapper.classList.remove('navbar__wrapper__fixed');
        navbar.classList.remove('container');
        [...navbarLinks].forEach((link) => link.classList.replace('link_black', 'link_white'));
        header.style.paddingTop = 0;
    }
});