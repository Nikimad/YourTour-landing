const header = document.querySelector('.header');
const navbarWrapper = header.querySelector('.navbar__wrapper');
const navbar = navbarWrapper.querySelector('.navbar');
const navbarLinks = navbar.querySelectorAll('.link');


const map = {
    fix: () => {
        //  fix wrapper
        navbarWrapper.classList.add('navbar__wrapper__fixed');
        //  add limits container to content
        navbar.classList.add('container');
        //  styling links
        [...navbarLinks].forEach((link) => link.classList.replace('link_white', 'link_black'));
        //  fill empty space
        header.style.paddingTop = `${navbar.offsetHeight}px`;
    },
    unfix: () => {
        //  unfix wrapper
        navbarWrapper.classList.remove('navbar__wrapper__fixed');
        //  remove limits container
        navbar.classList.remove('container');
        //  restyling links
        [...navbarLinks].forEach((link) => link.classList.replace('link_black', 'link_white'));
        //  refill emty space
        header.style.paddingTop = 0;
    }
}

document.addEventListener('scroll', (e) => {
    const shift = window.scrollY;
    //  break point 450px
    if (shift >= 450 && !navbarWrapper.classList.contains('navbar__wrapper__fixed')) {
        map.fix();
    }
    if (shift < 450 && navbarWrapper.classList.contains('navbar__wrapper__fixed')) {
        map.unfix();
    }
});

