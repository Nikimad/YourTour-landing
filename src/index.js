import './scss/app.scss';
import changeActive from './js/active.js';
import './js/fixed.js';

const toursNavLinks = document.querySelector('.tours__nav').querySelectorAll('.link');

[...toursNavLinks].forEach((navItem) => {
    navItem.addEventListener('click', (e) => changeActive(e, toursNavLinks)); 
});

