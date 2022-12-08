const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.navbar__menu');
const filterbutton = document.querySelector('#jsCatAll');
const filterbutton1 = document.querySelector('#jsCat0');
const filterbutton2 = document.querySelector('#jsCat1');
const filterbutton3 = document.querySelector('#jsCat2');
const filterbutton4 = document.querySelector('#jsCat3');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

//filter

filterbutton.addEventListener('click', () => {
    filterbutton.classList.toggle('filter-active');
    filterbutton1.classList.remove('filter-active');
    filterbutton2.classList.remove('filter-active');
    filterbutton3.classList.remove('filter-active');
    filterbutton4.classList.remove('filter-active');
});
filterbutton1.addEventListener('click', () => {
    filterbutton1.classList.toggle('filter-active');
    filterbutton.classList.remove('filter-active');
});
filterbutton2.addEventListener('click', () => {
    filterbutton2.classList.toggle('filter-active');
    filterbutton.classList.remove('filter-active');
});

filterbutton3.addEventListener('click', () => {
    filterbutton3.classList.toggle('filter-active');
    filterbutton.classList.remove('filter-active');
});